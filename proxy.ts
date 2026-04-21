// proxy.ts 파일을 프로젝트 루트(app/ 폴더와 같은 레벨)에 생성하면, 모든 페이지 요청을 가로채서 세션을 검사할 수 있습니다.
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function proxy(request: NextRequest) {
    const session = await getServerSession(authOptions);
    const { pathname } = request.nextUrl;
    console.log("@@@@@@@@실행?? proxy session:", session, " ", "pathname: ", pathname);

    if (pathname === "/login") {
        if (session) {
            console.log("로그인 진입/세션있어서 리다이렉트");
            return NextResponse.redirect(new URL("/", request.url));
        }

        console.log("로그인 진입/세션없음");
        return NextResponse.next();
    }
    if (!session) {
        console.log("세션없음");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("세션있음");
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * 아래 경로를 제외한 모든 요청에 미들웨어 적용:
         * - api (API 라우트)
         * - _next/static (정적 파일)
         * - _next/image (이미지 최적화 파일)
         * - favicon.ico (파비콘)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
};
