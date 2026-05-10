import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import TransitionProvider from "@/components/TransitionProvider";

const googleSans = localFont({
  src: [
    {
      path: "../fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Zain | Portfolio",
  description: "Portfolio of Muhammad Zain, a designer.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.variable}`}>
      <body className={googleSans.className}>
        <LenisProvider>
          <TransitionProvider>
            <CustomCursor />
            {children}
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
