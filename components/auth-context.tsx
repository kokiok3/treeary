// 전역에서 세션을 관리하기 위한 파일

"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
};

export default function AuthContext({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>;
}
