import { IconPlus } from "@/assets/svg/index";
import Icon from "@/components/common/icon";
import DiaryCardStyles from "@/styles/diary-card.module.css";

export default function DiaryCard({ active }: { active?: boolean }) {
    return (
        <div className={`${DiaryCardStyles.card} ${active ? DiaryCardStyles.active : ""}`}>
            <div className={DiaryCardStyles.date_wrapper}>
                <span>7</span>
                <span className={DiaryCardStyles.day}>화요일</span>
            </div>

            {active ? (
                <div className={DiaryCardStyles.preview}>오늘은</div>
            ) : (
                <Icon className={DiaryCardStyles.icon} isButton={true}>
                    <IconPlus></IconPlus>
                </Icon>
            )}
        </div>
    );
}
