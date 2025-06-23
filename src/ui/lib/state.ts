import {signal, compute} from "@targoninc/jess";
import type {PageInfo} from "./pageInfo.ts";
import {Api} from "./api.ts";

export const pages = signal<PageInfo[]>([]);
export const currentPage = signal<string>("index.md");
export const currentPageContent = signal<string>("");
export const search = signal("");
export const filteredPages = compute((ps, s) => {

    function matches(p: PageInfo) {
        return p.title.toLowerCase().includes(s.toLowerCase()) || p.children.some(c => matches(c));
    }

    return ps.filter(p => matches(p)).map(p => ({
        ...p,
        children: p.children.filter(c => matches(c))
    }));
}, pages, search);

function getCurrentPage() {
    const url = new URL(window.location.href);
    const pathname = url.pathname;

    if (pathname.length > 1) {
        let page = pathname.substring(1);

        if (page.endsWith(".md")) {
            return page;
        }

        return `${page}.md`;
    }

    return "index.md";
}

currentPage.subscribe((page, changed) => {
    if (!changed) {
        return;
    }

    const url = new URL(window.location.href);

    if (page === "index.md") {
        url.pathname = "/";
    } else {
        let pathPage = page;
        if (pathPage.endsWith(".md")) {
            pathPage = pathPage.substring(0, pathPage.length - 3);
        }
        url.pathname = `/${pathPage}`;
    }
    window.history.pushState(null, "", url);
});

Api.getPages().then(newPages => {
    pages.value = newPages;
    currentPage.value = getCurrentPage();
});

currentPage.subscribe(page => {
    currentPageContent.value = "";
    Api.getPageContent(page).then(content => {
        currentPageContent.value = content;
    });
})
