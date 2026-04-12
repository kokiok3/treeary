import { useLockBodyScroll } from "@/hooks";
import NavStyles from "@/styles/nav-drawer.module.css";
import Link from "next/link";
import Icon from "./common/icon";
import { IconDiary, IconKey } from "@/assets/svg/index";

export default function NavDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    useLockBodyScroll(isOpen);

    return (
        <>
            <nav className={`${NavStyles.nav} ${isOpen && NavStyles.visible}`}>
                <div className={NavStyles.top}>
                    <ul>
                        <li onClick={onClose}>
                            <Link href="/diary">
                                <Icon size={22}>
                                    <IconDiary />
                                </Icon>
                                다이어리
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={NavStyles.bottom}>
                    <ul>
                        <li onClick={onClose}>
                            <Link href="/settings/ai">
                                <Icon size={22}>
                                    <IconKey />
                                </Icon>
                                AI API Key
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="/mypage">kk</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                className={`${NavStyles.overlay} ${isOpen && NavStyles.visible}`}
                onClick={onClose}
            ></div>
        </>
    );
}
