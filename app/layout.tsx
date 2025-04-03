import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  style: "normal",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "woni.blog",
  description: "안녕하세요, 같이 가치를 만드는 조용원 입니다.",
};

const themeScript = `
  (() => {
    const isDark = window.localStorage.getItem("isDark");
    if (!isDark && window.matchMedia("(prefers-color-scheme: dark)").matches) 
      document.documentElement.classList.add("dark");
    if (isDark === "true") document.documentElement.classList.add("dark");
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${pretendard.className} transition-colors dark:bg-zinc-800`}
      >
        <Header />
        <main className="min-h-screen w-full px-4 py-8 max-md:px-6">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTAG}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA}`} />
    </html>
  );
}
