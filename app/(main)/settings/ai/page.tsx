import AddKey from "@/components/settings/ai/add-key";
import { findAiConfigs } from "./actions";
import aiApiKeyStyles from "@/styles/ai-api-key.module.css";

const fetchData = async () => {
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) throw new Error("GOOGLE_AI_API_KEY is not set");

    await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": apiKey // 여기에 실제 API 키를 넣으세요
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: "견으로 끝나는 단어 3개는?" }]
                    }
                ]
            })
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("data:", data); // API 응답 결과
            console.log("text:", data.candidates[0].content.parts[0].text);
        })
        .catch((error) => {
            console.error("API 호출 오류:", error); // 필수는 아님
        });
};

export default async function AI() {
    // await fetchData();

    const aikeys = await findAiConfigs();
    console.log("aikeys: ", aikeys);

    return (
        <section className="section">
            <AddKey></AddKey>

            {/* 등록한 ai key 정보 가져오기 : ai type, api key, isActive, 삭제 */}
            <div className="pt-[40px] flex flex-col gap-[10px]">
                {aikeys.map((e) => (
                    <div className={aiApiKeyStyles.card} key={e.id}>
                        <div className={aiApiKeyStyles.row}>
                            <span className={aiApiKeyStyles.title}>모델</span>
                            <span>{e.aiType}</span>
                        </div>
                        <div className={aiApiKeyStyles.row}>
                            <span className={aiApiKeyStyles.title}>키</span>
                            <span>{e.apiKey}</span>
                        </div>
                        <div className={aiApiKeyStyles.row}>
                            <span className={aiApiKeyStyles.title}>삭제</span>
                            <button className={aiApiKeyStyles.btn_delete}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
