import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavindu Sasmitha | Fullstack Software Engineer",
  description: "Personal portfolio of Kavindu Sasmitha — Fullstack Software Engineer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0f0a] text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}