import React from "react";
import WoniBlogLogo from "@/components/WoniBlogLogo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-[100%] flex-row items-center justify-center bg-[rgba(255,255,255,0.5)] px-4 py-8 backdrop-blur-md max-md:h-12 max-md:px-6 dark:bg-[rgba(0,0,0,0)]">
      <Link href="/">
        <WoniBlogLogo width={100} height={24} />
      </Link>
    </header>
  );
};

export default Header;
