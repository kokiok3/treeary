import Image from "next/image";

const fetchData = async () => {
    await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": "AIzaSyB94opzbz7jikpX1t4dF2K4AS2eo-KJSOk" // 여기에 실제 API 키를 넣으세요
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: "진으로 끝나는 단어3개는?" }]
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
        })
        .catch((error) => {
            console.error("API 호출 오류:", error); // 필수는 아님
        });
};

export default async function Home() {
    // await fetchData();

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}
