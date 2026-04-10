import { Switch as radixSwitch } from "radix-ui";
import "@/styles/switch.css";

export default function Switch() {
    return (
        <radixSwitch.Root className="SwitchRoot" id="airplane-mode">
            <radixSwitch.Thumb className="SwitchThumb" />
        </radixSwitch.Root>
    );
}
