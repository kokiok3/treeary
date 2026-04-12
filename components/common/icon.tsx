import { cloneElement, ReactElement } from "react";

interface IconProps<T = any> {
    children: ReactElement<T>;
    size?: number;
    disabled?: boolean;
    isButton?: boolean;
    className?: string;
    onClick?: () => void;
}

export default function Icon(props: IconProps) {
    const styledChild = cloneElement(props.children, {
        width: props.size ?? 24,
        height: props.size ?? 24,
        style: {
            color: props.disabled ? "gray" : "inherit"
        }
    });

    return props.isButton ? (
        <button className={`w-fit ${props.className ?? ""}`.trim()} onClick={props.onClick}>
            {styledChild}
        </button>
    ) : (
        <div className={`w-fit ${props.className ?? ""}`.trim()}>{styledChild}</div>
    );
}
