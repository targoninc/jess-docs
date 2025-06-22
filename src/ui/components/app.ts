import {create} from "@targoninc/jess";
import {page} from "./page.ts";
import {navbar} from "./navbar.ts";

export function app() {
    return create("div")
        .classes("app", "relative", "flex")
        .children(
            navbar(),
            page()
        ).build();
}