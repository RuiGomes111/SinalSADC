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
  title: "Sinal SADC - Notícias e Informações Regionais",
  description:
    "Acompanhe as últimas notícias e informações sobre a SADC, política, economia e cultura regional.",
  keywords: ["SADC", "Notícias", "África Austral", "Política", "Economia"],
  robots: "index, follow",
  openGraph: {
    title: "Sinal SADC - Notícias e Informações Regionais",
    description:
      "Últimas notícias da SADC, atualizações políticas e econômicas.",
    url: "https://sinal-sadc.vercel.app",
    siteName: "Sinal SADC",
    images: [
      {
        url: "https://sinal-sadc.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sinal SADC",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinal SADC - Notícias e Informações Regionais",
    description:
      "Últimas notícias da SADC, atualizações políticas e econômicas.",
    images: ["https://sinal-sadc.vercel.app/og-image.jpg"],
  },
  other: {
    "google-adsense-account": "ca-pub-5363326301479285",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
