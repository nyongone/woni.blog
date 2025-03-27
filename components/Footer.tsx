import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-[0_auto] flex h-auto w-[min(960px,100%)] flex-col items-start justify-start gap-1 py-8 max-md:px-4">
      <span className="text-sm text-zinc-300">Copyright by 조용원.</span>
      <span className="text-sm text-zinc-300">All Right Reserved.</span>
      <div className="flex flex-row items-start justify-start gap-4 py-4 text-sm text-zinc-300">
        <Link
          href="https://github.com/nyongone"
          className="transition-colors hover:text-zinc-500"
        >
          GitHub
        </Link>
        <Link
          href="mailto:whldt1@gmail.com"
          className="transition-colors hover:text-zinc-500"
        >
          Email
        </Link>
        <Link
          href="https://choyongwon.notion.site"
          className="transition-colors hover:text-zinc-500"
        >
          Portfolio
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
