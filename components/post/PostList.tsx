import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

interface Props {
  posts: {
    id: number;
    title: string;
    slug: string;
    category: string;
    created_at: string;
    isTemp: boolean;
  }[];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className="flex h-auto w-full flex-col items-start justify-start gap-2">
      {posts.map(
        (post) =>
          !post.isTemp && (
            <li
              key={post.id}
              className="h-auto w-full rounded-xl px-4 transition-colors max-md:px-0 md:hover:bg-zinc-100 dark:md:hover:bg-zinc-600"
            >
              <Link
                href={`/posts/${post.slug}`}
                className="flex h-12 flex-row items-center justify-between gap-4"
              >
                <span className="overflow-hidden break-all overflow-ellipsis whitespace-nowrap text-zinc-500 max-md:w-[220px] dark:text-zinc-50">
                  {post.title}
                </span>
                <span className="text-sm text-zinc-400">
                  {dayjs(post.created_at).format("YYYY. MM. DD")}
                </span>
              </Link>
            </li>
          ),
      )}
    </ul>
  );
};

export default PostList;
