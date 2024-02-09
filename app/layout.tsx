import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hafiedz Mada - Portfolio",
  description: "Welcome to the portfolio of Hafiedz Mada showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
