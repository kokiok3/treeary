import ButtonStyles from "@/styles/button.module.css";
import { ReactElement } from "react";

interface ButtonProps {
    children: ReactElement | string;
}

export default function Button(props: ButtonProps) {
    return <button className={ButtonStyles.button}>{props.children}</button>;
}
