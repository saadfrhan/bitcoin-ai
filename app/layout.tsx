import type { Metadata } from "next";
import localFont from 'next/font/local'
import {Poppins} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";

const cooperHewwit = localFont({
  src: "./cooper-hewitt.otf",
  display: "swap",
  variable: "--font-cooper-hewitt",
});

const sfTransRobotics = localFont({
  src: "./sf-transrobotics.ttf",
  display: "swap",
  variable: "--font-sf-transrobotics",
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "BitcoinAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cooperHewwit.variable} ${sfTransRobotics.variable} ${poppins.variable} w-full mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
