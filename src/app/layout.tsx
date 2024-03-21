import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lee-DongWook",
  description: "이동욱 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="description" content="프론트엔드 이동욱 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="프론트엔드 이동욱 포트폴리오" />
        <meta
          property="og:description"
          content="Next.JS와 Firebase로 구성한 포트폴리오 페이지입니다."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="프론트엔드 이동욱 포트폴리오" />
        <meta
          name="twitter:description"
          content="Next.JS와 Firebase로 구성한 포트폴리오 페이지입니다."
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
