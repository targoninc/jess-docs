import {type AnyElement, compute, create} from "@targoninc/jess";
import {PageInfo} from "../lib/pageInfo.ts";
import {currentPage} from "../lib/state.ts";

function toLink(page: PageInfo) {
    return `/?page=${encodeURIComponent(page.filename)}`;
}

export function sidebarLink(page: PageInfo): AnyElement {
    const clean = page.filename.replaceAll("\\", "/");
    const isActive = compute(p => clean === p.replaceAll("\\", "/"), currentPage);
    const active = compute((a): string => a ? "active" : "_", isActive);

    return create("div")
        .classes("flex-v", "no-gap")
        .children(
            create("a")
                .classes("sidebar-link", active)
                .text(page.title)
                .onclick((e: MouseEvent) => {
                    if (e.button === 0) {
                        currentPage.value = page.filename;
                        e.preventDefault();
                    }
                })
                .href(toLink(page)),
            create("div")
                .classes("sidebar-link-children", "flex-v", "no-gap")
                .children(
                    ...page.children.map(child => sidebarLink(child))
                ).build()
        ).build();
}