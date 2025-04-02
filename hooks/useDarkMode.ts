import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!window.localStorage.getItem("isDark")) {
      window.localStorage.setItem(
        "isDark",
        window.matchMedia("(prefers-color-scheme: dark)").matches.toString(),
      );
    }

    const isBrowserDarkMode = window.localStorage.getItem("isDark") === "true";

    setIsDark(isBrowserDarkMode);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("isDark", "true");
    }

    if (!isDark && isDark !== undefined) {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("isDark", "false");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return { isDark, toggleDark };
};

export default useDarkMode;
