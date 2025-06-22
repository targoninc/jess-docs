import {create, InputType} from "@targoninc/jess";
import {input} from "@targoninc/jess-components";
import {search} from "../state";

export function navbar() {
    return create("div")
        .classes("navbar")
        .children(
            input({
                name: "search",
                value: search,
                type: InputType.text,
                placeholder: "Search",
            })
        ).build();
}