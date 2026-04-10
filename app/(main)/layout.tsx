// 로그인을 제외한 모든 페이지에서 사용되는 공통 UI
import Gnb from "@/components/gnb";
import MainLayoutStyles from "@/styles/main-layout.module.css";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={MainLayoutStyles.main_layout}>
            <Gnb></Gnb>

            {/* navigation drawer */}

            {/* main container */}
            <div className={MainLayoutStyles.container}>{children}</div>
        </div>
    );
}
