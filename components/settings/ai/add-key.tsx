"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { CreateAiConfig, createAiConfig, fetchGeminiModel } from "@/app/(main)/settings/ai/actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Select, { SelectItem } from "@/components/common/select";
import { Model } from "@google/genai";

export default function AddKey() {
    const [models, setModels] = useState<Model[]>([]);
    useEffect(() => {
        const model = async () => {
            const result = await fetchGeminiModel();
            setModels(result);
        };
        model();
    }, []);

    const router = useRouter();

    const [aiKey, setAiKey] = useState("");
    const [validateAiKey, setValidateAiKey] = useState(false);
    useEffect(() => {
        if (aiKey.trim().length > 0) {
            setValidateAiKey(false);
        }
    }, [aiKey]);

    /* 등록버튼을 누르면
    입력란의 내용이 암호화를 거쳐
    AiConfig 테이블에 저장이 됨. */
    const handleAddAiKey = async () => {
        // 입력란 유효성 체크
        if (!aiKey) {
            setValidateAiKey(true);
            return;
        }

        // todo: aiKey가 올바른지 미리 확인 가능?

        // todo: aiKey 암호화

        // db에 aiKey 저장
        const response = await createAiConfig(aiKey);

        // 입력값 초기화
        setAiKey("");

        // 화면 재렌더
        router.refresh();
        console.log("createAiConfig: ", response, aiKey);
    };

    return (
        <div className="flex flex-col gap-[10px]">
            <Input
                placeholder="API Key 입력"
                value={aiKey}
                onChange={(e) => setAiKey(e.target.value)}
            ></Input>
                {/* <Select placeholder="모델">
                    {models.map((e) => {
                        if (e.name && e.displayName) {
                            return (
                                <SelectItem value={e.name} key={e.name}>
                                    {e.displayName}
                                </SelectItem>
                            );
                        }
                    })}
                </Select> */}
            {validateAiKey && (
                <span className="text-red-600 text-[12px]">AI Key를 입력해 주세요.</span>
            )}
            <Button onClick={handleAddAiKey}>등록</Button>
        </div>
    );
}
