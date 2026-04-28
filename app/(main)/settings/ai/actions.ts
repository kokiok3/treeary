"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";
import { getServerSession } from "next-auth";
import { GoogleGenAI } from "@google/genai";

export async function findAiConfigs() {
    return await prisma.aiConfig.findMany();
}

const AI_TYPE = {
    gemini: "Gemini"
};
type AiType = keyof typeof AI_TYPE;
export interface CreateAiConfig {
    aiType: AiType;
    aiKey: string;
}
export async function createAiConfig(params: CreateAiConfig) {
    // 로그인한 유저아이디로 조건 검색
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    if (!userEmail) throw new Error("UserEmail not found");

    const user = await prisma.user.findFirst({
        where: { email: userEmail }
    });
    if (!user) throw new Error("User not found");

    // todo: user에서 ai type 중복체크
    // 데이터 삽입
    return await prisma.aiConfig.create({
        data: {
            userId: user.id,
            userEmail: user.email,
            aiType: AI_TYPE[params.aiType],
            apiKey: params.aiKey
        }
    });
}

export async function fetchGeminiModel() {
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_AI_API_KEY });
    const aiList = await ai.models.list();

    return aiList.page;
}
