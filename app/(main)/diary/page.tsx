"use client";
import IconChevronLeft from "@/assets/svg/icon-chevron-left";
import IconChevronRight from "@/assets/svg/icon-chevron-right";
import Switch from "@/components/common/switch";
import Icon from "@/components/common/icon";
import DiaryStyles from "@/styles/diary.module.css";
import DiaryCard from "@/components/diary/diary-card";

export default function Diary() {
    return (
        <section className="section">
            {/* 헤더 */}
            <div className={DiaryStyles.header}>
                <div className={DiaryStyles.date_wrapper}>
                    <Icon size={16} isButton>
                        <IconChevronLeft></IconChevronLeft>
                    </Icon>
                    <span className={DiaryStyles.text}>2026년 4월</span>
                    <Icon size={16} isButton>
                        <IconChevronRight></IconChevronRight>
                    </Icon>
                </div>

                <Switch></Switch>
            </div>

            {/* 카드 */}
            <div className={DiaryStyles.card_wrapper}>
                {Array.from({ length: 30 }).map((_, i) => (
                    <DiaryCard key={i} active={i % 3 === 0} />
                ))}
            </div>
        </section>
    );
}
