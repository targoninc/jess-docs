import { create, Signal, signal } from "@targoninc/jess";
import { button } from "@targoninc/jess-components";

async function copy(icon: Signal<string>, content: string) {
    await navigator.clipboard.writeText(content);
    icon.value = "check";
    setTimeout(() => {
        icon.value = "content_copy";
    }, 2000);
}

export function codeCopyButton(content: string) {
    const icon = signal("content_copy");

    return create("div")
        .classes("flex", "code-copy-button")
        .children(
            button({
                icon: { icon },
                title: "Copy to clipboard",
                onclick: () => copy(icon, content),
            }),
        ).build();
}