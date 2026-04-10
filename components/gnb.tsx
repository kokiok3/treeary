import GnbStyles from "@/styles/gnb.module.css";
import Icon from "@/components/common/icon";
import IconMenu from "@/assets/svg/icon-menu";

export default function Gnb({ title, back }: { title?: string; back?: boolean }) {
    return (
        <header className={GnbStyles.gnb}>
            <Icon size={20}>
                <IconMenu />
            </Icon>
            <h1 className={GnbStyles.title}>{title ?? "다이어리"}</h1>
        </header>
    );
}
