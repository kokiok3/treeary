import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import AuthContext from "@/components/auth-context";

const pretendard = localFont({
    src: "../public/font/PretendardVariable.woff2",
    // 가변 폰트의 두께 범위를 100 900으로 지정
    weight: "100 900",
    // CSS 변수명 정의
    variable: "--font-pretendard",
    // 폰트 교체 시 가독성 확보
    display: "swap"
});

export const metadata: Metadata = {
    title: "트리어리(Treeary) - AI로 피어나는 일상 언어 학습",
    description:
        "AI를 연결해서 언어를 학습 하는 채팅형AI 언어 학습 서비스 트리어리(Treeary). 채팅형 AI 번역으로 오늘 쓰고 싶은 문장을 원어민 표현으로 배우세요. 매일 기록하는 영어 일기로 쉽고 꾸준한 언어 학습 습관을 만듭니다.",
    keywords: ["AI 언어학습", "원어민 번역", "영어 일기", "트리어리", "Treeary"]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={pretendard.variable} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <AuthContext>{children}</AuthContext>
            </body>
        </html>
    );
}
