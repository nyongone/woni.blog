"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  categories: { name: string; slug: string }[];
}

const CategoryList = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <div className="flex flex-row items-center justify-start gap-4 max-md:flex-col max-md:items-start max-md:gap-2">
      <span className="font-bold text-zinc-500 dark:text-zinc-400">
        CATEGORY
      </span>
      <div className="flex flex-row flex-wrap items-center justify-start gap-2">
        <Link
          className={clsx(
            "h-auto w-auto cursor-pointer rounded-lg px-3 py-1.5 text-sm",
            {
              "bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-zinc-600":
                currentCategory,
              "bg-blue-400 font-bold text-white dark:bg-zinc-600":
                !currentCategory,
            },
          )}
          href="/"
        >
          전체
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            className={clsx(
              "h-auto w-auto cursor-pointer rounded-lg px-3 py-1.5 text-sm",
              {
                "bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-zinc-600":
                  category.slug !== currentCategory,
                "bg-blue-400 font-bold text-white dark:bg-zinc-600":
                  category.slug === currentCategory,
              },
            )}
            href={`/?category=${category.slug}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
