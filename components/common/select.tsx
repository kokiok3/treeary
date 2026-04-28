import * as React from "react";
import { Select as radixSelect } from "radix-ui";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import styles from "@/styles/select.module.css";

interface SelectItemProps {
    children: React.ReactNode;
    value: string; // 필수 속성으로 명시
    [key: string]: any; // 나머지 props 허용
}

const Select = ({
    placeholder,
    children,
    value,
    onValueChange
}: {
    placeholder?: string;
    children: React.ReactNode;
    value: string;
    onValueChange: (value: string) => void;
}) => (
    <radixSelect.Root value={value} onValueChange={onValueChange}>
        <radixSelect.Trigger className={styles.trigger} aria-label={placeholder}>
            <radixSelect.Value placeholder={placeholder} />
            <radixSelect.Icon className={styles.icon}>
                <ChevronDownIcon />
            </radixSelect.Icon>
        </radixSelect.Trigger>

        <radixSelect.Portal>
            <radixSelect.Content className={styles.content} position="popper">
                <radixSelect.ScrollUpButton className={styles.scroll_button}>
                    <ChevronUpIcon />
                </radixSelect.ScrollUpButton>
                <radixSelect.Viewport className={styles.viewport}>{children}</radixSelect.Viewport>
                <radixSelect.ScrollDownButton className={styles.scroll_button}>
                    <ChevronDownIcon />
                </radixSelect.ScrollDownButton>
            </radixSelect.Content>
        </radixSelect.Portal>
    </radixSelect.Root>
);

export const SelectItem = ({ children, ...props }: SelectItemProps) => {
    return (
        <radixSelect.Item className={styles.item} {...props}>
            <radixSelect.ItemText>{children}</radixSelect.ItemText>
            <radixSelect.ItemIndicator className={styles.item_indicator}>
                <CheckIcon />
            </radixSelect.ItemIndicator>
        </radixSelect.Item>
    );
};

export default Select;
