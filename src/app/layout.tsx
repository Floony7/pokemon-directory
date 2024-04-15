import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Header from "@/components/header";

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
        className={`min-h-screen p-6 md:p-24 bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-800 ${inter.className}`}
      >
        <div className="w-full xl:w-9/12 mx-auto">
          <Header />
          <Theme style={{ backgroundColor: "inherit" }}>
            {children}
            {/* <ThemePanel /> */}
          </Theme>
        </div>
      </body>
    </html>
  );
}
