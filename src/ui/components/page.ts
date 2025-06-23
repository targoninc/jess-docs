import {compute, create} from "@targoninc/jess";
import {docsSite} from "./docs-site.ts";
import {currentPageContent, filteredPages} from "../lib/state.ts";
import {sidebar} from "./sidebar.ts";

export function page() {
    return create("div")
        .classes("page", "flex", "no-wrap")
        .children(
            compute(p => sidebar(p), filteredPages),
            compute(c => docsSite(c), currentPageContent),
        ).build();
}