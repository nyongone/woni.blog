import { getPostBySlug } from "@/apis/post";
import MarkdownViewer from "@/components/common/MarkdownViewer";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import Link from "next/link";
import readingTime from "reading-time";
import { Metadata } from "next";
import PostToc from "@/components/post/PostToc";
import { getHeadingsFromMarkdown } from "@/utils/markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(decodeURI(slug));

  if (post)
    return {
      title: `${post[0].title} | woni.blog`,
    };

  return { title: "woni.blog" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(decodeURI(slug));

  if (!post || post.length < 1 || post[0].isTemp) notFound();

  return (
    <div className="relative m-[0_auto] w-[min(768px,100%)]">
      {getHeadingsFromMarkdown(post[0].content).length > 0 && (
        <aside className="absolute top-12 right-full h-full min-w-[200px] pr-8 max-xl:hidden">
          <PostToc tocs={getHeadingsFromMarkdown(post[0].content)} />
        </aside>
      )}
      <div className="flex flex-col items-start justify-start gap-4 pb-16">
        <div className="flex flex-row items-center justify-start gap-2">
          <Link
            href={`/?category=${post[0].category.slug}`}
            className="rounded-lg bg-zinc-100 px-2 py-1 text-sm text-zinc-400 transition-colors hover:bg-zinc-200 dark:bg-transparent dark:hover:bg-zinc-600"
          >
            {post[0].category.name}
          </Link>
          <span className="text-zinc-400">·</span>
          <span className="text-zinc-400">
            {dayjs(post[0].created_at).format("YYYY. MM. DD")}
          </span>
          <span className="text-zinc-400">·</span>
          <span className="text-zinc-400">
            {Math.ceil(readingTime(post[0].content).minutes)} min read
          </span>
        </div>
        <h1 className="text-4xl leading-12 font-bold text-zinc-700 dark:text-zinc-300">
          {post[0].title}
        </h1>
      </div>
      <MarkdownViewer markdown={post[0].content} />
    </div>
  );
}
