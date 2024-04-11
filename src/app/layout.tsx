import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Finder",
  description: "All the Pokemon profiles, stats and facts in one place!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-800 text-white w-11/12 md:w-9/12 mx-auto ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
