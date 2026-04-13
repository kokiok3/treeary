import { Avatar } from "radix-ui";
import styles from "@/styles/avatar.module.css";

export function RadixAvatar({ img, name }: { img?: string; name: string }) {
    return (
        <Avatar.Root className={styles.root}>
            <Avatar.Image
                className={styles.image}
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
            <Avatar.Fallback className={styles.fallback} delayMs={600}>
                {name}
            </Avatar.Fallback>
        </Avatar.Root>
    );
}
