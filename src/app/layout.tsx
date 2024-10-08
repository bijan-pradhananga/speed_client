import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Static/Footer";
import Header from "@/components/Static/Header";
import { Providers as ThemeProvider } from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Speed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-gray-900`}
      >
        <ThemeProvider>
          <Header />
          <div className="mx-auto w-full max-w-screen-xl px-2 md:px-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
