import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import TransitionProvider from "@/components/TransitionProvider";

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
    <html lang="en">
      <body>
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
