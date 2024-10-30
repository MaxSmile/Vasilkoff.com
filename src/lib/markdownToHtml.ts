// src/app/lib/markdownToHtml.ts

import { remark } from "remark";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkHeadingId from "remark-heading-id";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm) // Adds GitHub Flavored Markdown support
    .use(remarkHeadingId) // Adds IDs to headings
    .use(remarkRehype) // Converts Markdown to HTML-compatible rehype AST
    .use(rehypeStringify) // Converts the rehype AST to HTML string
    .process(markdown);

  return result.toString();
}

