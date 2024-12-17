import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";

const geistSans = Geist ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono  = Geist_Mono  ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Teste",
  description: "Lista de músicas",
};

export default function RootLayout({
  children,
}: Readonly<
{ 
  children: React.ReactNode; 
}>) {
  return (
    <html lang="pt-Br">
      <body className = {`bg-zinc-900 text-zinc-50 ${geistSans.variable} ${geistMono.variable} antialias`}>
        {children}
      </body>
    </html>
  );
}
