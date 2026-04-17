import ButtonStyles from "@/styles/button.module.css";
import { ReactElement } from "react";

interface ButtonProps {
    children?: ReactElement | string;
    size?: "sm" | "md" | "lg";
    type?: "filled" | "outlined";
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const setButtonSize = () => {
        switch (props.size) {
            case "sm":
                return ButtonStyles.sm;
            case "md":
                return ButtonStyles.md;
            // case "lg":
            //     return ButtonStyles.lg;
            default:
                return ButtonStyles.sm;
        }
    };
    const setButtonType = () => {
        switch (props.type) {
            case "filled":
                return ButtonStyles.filled;
            case "outlined":
                return ButtonStyles.outlined;
            default:
                return ButtonStyles.filled;
        }
    };

    return (
        <button
            className={`${ButtonStyles.button} ${setButtonSize()} ${setButtonType()}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
