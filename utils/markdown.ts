import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";

export function parseMarkdownToHTML(markdown: string) {
  return unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .processSync(markdown)
    .toString();
}

export function getHeadingsFromMarkdown(markdown: string) {
  const _getHeadingLevel = (s: string) => s.match(/^(#{1,3})(?=\s)/)![0].length;
  const _getHeadingId = (s: string) => {
    const slugger = new GithubSlugger();
    const slug = slugger.slug(s.match(/^(#{1,3})\s+(\S.*)/)![2]);

    return slug;
  };

  const _getHeadings = (markdown: string) => {
    const lines = markdown.split("\n");
    return lines
      .filter((line) => line.startsWith("#"))
      .map((heading) => {
        const level = _getHeadingLevel(heading);
        const id = _getHeadingId(heading);

        return {
          id: id,
          level: level,
          content: heading.replaceAll("#", "").trim(),
        };
      });
  };

  return _getHeadings(markdown);
}
