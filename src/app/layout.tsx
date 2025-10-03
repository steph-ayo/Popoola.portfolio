import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Popoola.dev",
  description: "My portfolio wesite",
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico", // For legacy browsers
    apple: "/logo.png", // iOS homescreen icon
  },
  openGraph: {
    title: "My Portfolio",
    description: "Frontend Engineer Portfolio",
    url: "https://mywebsite.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "/logo.png", // Must be in /public
        width: 800,
        height: 600,
        alt: "My Portfolio Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
