import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.scss";

const mangueira = localFont({
  src: [
    {
      path: "../assets/fonts/mangueira/Mangueira-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/mangueira/Mangueira-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/mangueira/Mangueira-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/mangueira/Mangueira-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/mangueira/Mangueira-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ultragaz Energia Inteligente",
  description: "Ultragaz Energia Inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mangueira.className}`}>
        {children}
      </body>
    </html>
  );
}
