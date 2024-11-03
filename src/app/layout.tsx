import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtyFlow",
  description: "Découvrez et soutenez des artistes emmergeant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&family=Oleo+Script:wght@400;700&family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
