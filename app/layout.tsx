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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="../styles/hljs.css"
          media="screen and (prefers-color-scheme: light)"
        />
        <link
          rel="stylesheet"
          href="../styles/hljs-dark.css"
          media="screen and (prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${pretendard.className} dark:bg-zinc-800`}>
        <Header />
        <main className="m-[0_auto] min-h-screen w-[min(960px,100%)] px-4 py-8 max-md:px-6">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTAG}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA}`} />
    </html>
  );
}
