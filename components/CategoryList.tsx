"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

interface Props {
  categories: { name: string; slug: string }[];
}

const CategoryList = ({ categories }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  return (
    <div className="flex flex-row items-center justify-start gap-4 max-md:flex-col max-md:items-start max-md:gap-2">
      <span className="font-bold text-zinc-500">CATEGORY</span>
      <div className="flex flex-row flex-wrap items-center justify-start gap-2">
        <button
          className={clsx(
            "h-auto w-auto cursor-pointer rounded-lg px-3 py-1.5 text-sm",
            {
              "bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200":
                currentCategory,
              "bg-blue-400 font-bold text-white": !currentCategory,
            },
          )}
          onClick={() => router.push("/")}
        >
          전체
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            className={clsx(
              "h-auto w-auto cursor-pointer rounded-lg px-3 py-1.5 text-sm",
              {
                "bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200":
                  category.slug !== currentCategory,
                "bg-blue-400 font-bold text-white":
                  category.slug === currentCategory,
              },
            )}
            onClick={() => router.push(`/?category=${category.slug}`)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
