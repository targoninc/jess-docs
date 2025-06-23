import {marked} from "marked";
import DOMPurify from 'dompurify';
import {create} from "@targoninc/jess";
import hljs from "highlight.js";
import {codeCopyButton} from "./code-copy-button.ts";
import {currentPage} from "../lib/state.ts";

function parseMarkdown(text: string) {
    const rawMdParsed = marked.parse(text, {
        async: false
    });
    return DOMPurify.sanitize(rawMdParsed);
}

function attachCodeCopyButtons() {
    const preCodes = document.querySelectorAll("pre code");
    for (const codeBlock of preCodes) {
        const pre = codeBlock.parentElement;
        pre.classList.add("relative");
        pre.classList.add("hljs");
        if (!pre.lastElementChild.classList.contains("code-copy-button")) {
            pre.appendChild(codeCopyButton(codeBlock.textContent));
        }
    }
}

export function docsSite(content: string) {
    setTimeout(() => {
        hljs.highlightAll();
        document.querySelectorAll("article a:not([target='_blank'])").forEach(a => {
            const link = a as HTMLAnchorElement;
            link.target = "_blank";
            link.onclick = e => {
                if (e.button === 0 && link.href.includes("localhost")) {
                    e.preventDefault();
                    currentPage.value = link.href.split(window.location.origin + "/")[1] + ".md";
                }
            }
        });
        attachCodeCopyButtons();
    })

    return create("article")
        .classes("content")
        .html(parseMarkdown(content))
        .build();
}