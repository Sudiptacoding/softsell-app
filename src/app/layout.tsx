// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Sell Your Software Licenses",
  description: "Resell unused software licenses securely with SoftSell.",
  keywords: [
    "SoftSell",
    "Software License",
    "Sell License",
    "Resell Software",
    "Unused Software License",
  ],
  authors: [{ name: "Sudipta Biswas", url: "https://github.com/Sudiptacoding" }],
  generator: "Next.js",
  applicationName: "SoftSell",
  creator: "Sudipta Biswas",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SoftSell - Sell Unused Licenses",
    description: "Easily and securely resell your software licenses with SoftSell.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/feature.png", // Add og-image.png in public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell",
    description: "Resell unused software licenses securely with SoftSell.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
