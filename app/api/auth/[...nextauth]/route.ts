import dotenv from "dotenv"; // 또는 import 'dotenv/config';
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const dev = process.env.NODE_ENV !== "production";
if (dev) {
    dotenv.config({ path: ".env.local" });
}

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };
