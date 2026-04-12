import { useEffect } from "react";

export function useLockBodyScroll(lock: boolean) {
    useEffect(() => {
        if (!lock) return;

        const originalStyle = window.getComputedStyle(document.body);
        document.body.style.overflow = "hidden";
        // (선택) iOS Safari 등에서 더 확실하게 막으려면 touch-action 사용
        document.body.style.touchAction = "none";

        // 클린업함수: 다음 Effect가 실행되기 직전, unmount 시 실행
        return () => {
            document.body.style.overflow = originalStyle.overflow;
            document.body.style.touchAction = originalStyle.touchAction;
        };
    }, [lock]);
}
