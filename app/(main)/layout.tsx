"use client";

// 로그인을 제외한 모든 페이지에서 사용되는 공통 UI
import Gnb from "@/components/gnb";
import NavDrawer from "@/components/nav-drawer";
import MainLayoutStyles from "@/styles/main-layout.module.css";
import { useState } from "react";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className={MainLayoutStyles.main_layout}>
            <Gnb onNavClick={() => setIsNavOpen(true)}></Gnb>

            {/* navigation drawer */}
            <NavDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}></NavDrawer>

            {/* main container */}
            <div className={MainLayoutStyles.container}>{children}</div>
        </div>
    );
}
