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
  metadataBase: new URL("https://peteremad.vercel.app"),
  title: "Peter Emad | Portfolio",
  description:
    "Explore Peter Emad's portfolio featuring modern web applications, AI projects, and creative software solutions.",

  icons: {
    icon: "/peter-griffin.svg",
  },

  openGraph: {
    title: "Peter Emad | Portfolio",
    description:
      "Explore Peter Emad's portfolio featuring modern web applications, AI projects, and creative software solutions.",
    url: "https://peteremad.vercel.app",
    siteName: "Peter Emad Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Peter Emad Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Peter Emad | Portfolio",
    description:
      "Explore Peter Emad's portfolio featuring modern web applications, AI projects, and creative software solutions.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
