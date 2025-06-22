import {create, InputType} from "@targoninc/jess";
import {input} from "@targoninc/jess-components";
import {search} from "../lib/state.ts";

export function navbar() {
    return create("div")
        .classes("navbar", "flex", "align-children", "space-between")
        .children(
            create("h3")
                .text("Jess Docs")
                .build(),
            input({
                name: "search",
                value: search,
                type: InputType.text,
                placeholder: "Search",
            })
        ).build();
}