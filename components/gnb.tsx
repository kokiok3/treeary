"use client";
import GnbStyles from "@/styles/gnb.module.css";
import Icon from "@/components/common/icon";
import IconMenu from "@/assets/svg/icon-menu";
import { useParams, usePathname } from "next/navigation";

export default function Gnb({ back }: { back?: boolean }) {
    const params = useParams();
    const pathname = usePathname();

    const getTitle = () => {
        console.log(pathname, params);
        if (params.id) {
            return;
        }

        if (pathname === "/diary") return "다이어리";
        if (pathname === "/settings/ai") return "API AI Key";
    };

    return (
        <header className={GnbStyles.gnb}>
            <Icon size={20}>
                <IconMenu />
            </Icon>
            <h1 className={GnbStyles.title}>{getTitle()}</h1>
        </header>
    );
}
