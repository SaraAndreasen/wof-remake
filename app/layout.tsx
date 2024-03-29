import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white">
            <a href="/">
              <Image
                src="/../WOF_Final_Cropped.png"
                alt="WOF logo"
                width={100}
                height={24}
              />
            </a>

            <a href="/Overview">Festivals</a>
            <a href="/Packing-guide">Packing guide</a>
            <a href="/Contact">Contact and FAQ</a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
