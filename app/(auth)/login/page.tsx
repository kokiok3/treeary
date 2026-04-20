"use client";
import Logo from "@/assets/images/logo.png";
import Button from "@/components/common/button";
import Image from "next/image";
import LoginStyles from "@/styles/login.module.css";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();
    console.log("session", session);

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/" });
    };
    const handleLoginOut = () => {
        signOut();
    };
    };
    return (
        <div className={LoginStyles.login}>
            <div className={LoginStyles.logo_area}>
                <div className={LoginStyles.logo}>
                    <Image src={Logo} width={100} height={100} alt="로고 이미지"></Image>
                    <span className={LoginStyles.text}>트리어리</span>
                </div>
            </div>

            <div className={LoginStyles.button_wrapper}>
                {/* <Button size="md" type="outlined">
                    카카오톡으로 시작하기
                </Button>
                <Button size="md" type="outlined">
                    네이버로 시작하기
                </Button> */}
                <Button size="md" type="outlined" onClick={handleGoogleLogin}>
                    Google로 시작하기
                </Button>
                <Button size="md" type="outlined" onClick={handleLoginOut}>
                    로그아웃
                </Button>
            </div>
        </div>
    );
}
