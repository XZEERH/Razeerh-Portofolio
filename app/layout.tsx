import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAZEERH DEV | Premium Portfolio",
  description: "Futuristic Developer Portfolio of RAZEERH DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-dark-900 text-white min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}