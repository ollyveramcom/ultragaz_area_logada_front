import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/styles/globals.scss";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${roboto.className} container mx-auto`}>
        {children}
      </body>
    </html>
  );
}
