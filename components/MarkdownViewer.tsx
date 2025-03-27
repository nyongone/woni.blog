import React from "react";
import { parseMarkdownToHTML } from "@/utils/markdown";

import "@/styles/hljs.css";

interface Props {
  markdown: string;
}

const MarkdownViewer = ({ markdown }: Props) => {
  return (
    <article
      className="prose w-full pb-12"
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(markdown),
      }}
    ></article>
  );
};

export default MarkdownViewer;
