import dotenv from "dotenv"; // 또는 import 'dotenv/config';
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prisma";

const dev = process.env.NODE_ENV !== "production";
if (dev) {
    dotenv.config({ path: ".env.local" });
}

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ]
    // 필요 시 로그인 페이지 커스텀 경로 설정
    //   pages: {
    //     signIn: "/login",
    //   },
};
const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
