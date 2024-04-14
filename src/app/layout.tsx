import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/component/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "કેસરીનંદન ધૂનમંડળ",
  description: "Hanuman Chalisa, Aarti, thal",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  authors: [
    { name: "Nishit Patel" },
    {
      name: "Utsav Patel",
      url: "https://github.com/utsavPatidar9316/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/images/kesrinandan.png" sizes="any" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
