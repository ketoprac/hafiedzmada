import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers/Providers";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Hafiedz Mada - Portfolio",
  description:
    "Welcome to the portfolio of Hafiedz Mada, showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader height={4} color="#000" showSpinner={false} />
            <main className="flex min-h-screen flex-col items-center">
              <Navbar />
              {children}
            </main>
        </Providers>
      </body>
    </html>
  );
}
