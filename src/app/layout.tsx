import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FormPages from "@/components/FormPages";
import Logo from "@/components/Logo";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page navigation component",
  description: "Navigate between form pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="h-screen w-full max-w-7xl p-8 flex flex-col items-start m-auto">
          <Logo />
          {children}
          <FormPages />
        </div>
      </body>
    </html>
  );
}
