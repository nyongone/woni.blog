"use client";

import React from "react";
import WoniBlogLogo from "@/components/assets/WoniBlogLogo";
import Link from "next/link";
import useDarkMode from "@/hooks/useDarkMode";
import LightModeIcon from "@/components/assets/LightModeIcon";
import DarkModeIcon from "@/components/assets/DarkModeIcon";

const Header = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 flex h-24 w-[100%] flex-row items-center justify-center bg-[rgba(255,255,255,0.5)] px-4 py-8 backdrop-blur-md max-md:h-16 max-md:px-0 max-md:py-0 dark:bg-[rgba(0,0,0,0)]">
      <div className="flex h-full w-[min(768px,100%)] flex-row items-center justify-between px-4">
        <Link href="/">
          <WoniBlogLogo
            width={100}
            height={24}
            className="dark:fill-zinc-200"
          />
        </Link>
        <button className="cursor-pointer" onClick={() => toggleDark()}>
          {isDark && <LightModeIcon fill="var(--color-white)" />}
          {!isDark && isDark !== undefined && (
            <DarkModeIcon fill="var(--color-zinc-700)" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
