import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Costa de Oro | Mazatlán, Sinaloa",
  description:
    "Disfruta de tus vacaciones en el Hotel Costa de Oro, ubicado en la Zona Dorada de Mazatlán. Hotel familiar frente al mar con alberca, buffet, noches temáticas, shows en vivo y todo incluido. La mejor opción para relajarte y divertirte con toda la familia.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
