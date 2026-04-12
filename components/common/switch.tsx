import { Switch as radixSwitch } from "radix-ui";
import SwitchStyles from "@/styles/switch.module.css";

export default function Switch() {
    return (
        <radixSwitch.Root className={SwitchStyles.switch_root} id="airplane-mode">
            <radixSwitch.Thumb className={SwitchStyles.switch_thumb} />
        </radixSwitch.Root>
    );
}
