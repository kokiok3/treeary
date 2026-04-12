import InputStyles from "@/styles/input.module.css";

interface InputProps {
    placeholder?: string;
}

export default function Input(props: InputProps) {
    return <input className={InputStyles.input} type="text" placeholder={props.placeholder} />;
}
