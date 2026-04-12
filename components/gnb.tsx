"use client";
import GnbStyles from "@/styles/gnb.module.css";
import Icon from "@/components/common/icon";
import IconMenu from "@/assets/svg/icon-menu";
import { useHeader } from "@/components/gnb-context";

export default function Gnb({ back }: { back?: boolean }) {
    const { title } = useHeader();

    return (
        <header className={GnbStyles.gnb}>
            <Icon size={20}>
                <IconMenu />
            </Icon>
            <h1 className={GnbStyles.title}>{title}</h1>
        </header>
    );
}
