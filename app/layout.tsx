import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league_font = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashkay Autoparts",
  description: "Genuine Autoparts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_font.className}>{children}</body>
    </html>
  );
}
