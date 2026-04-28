import InputStyles from "@/styles/input.module.css";
import { ChangeEventHandler } from "react";

interface InputProps {
    placeholder?: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input(props: InputProps) {
    return (
        <input
            className={InputStyles.input}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}
