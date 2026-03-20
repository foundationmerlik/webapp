import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Merlik Foundation — Empowering the Boy Child in Kenya",
    template: "%s | Merlik Foundation",
  },
  description:
    "Merlik Foundation is a Kenyan nonprofit mentoring adolescent boys through education, mentorship, and community outreach. Help us develop Africa's next generation of leaders.",
  keywords: [
    "nonprofit Kenya",
    "youth mentorship Kenya",
    "boy child empowerment",
    "Merlik Foundation",
    "donate Kenya nonprofit",
    "Nairobi youth development",
  ],
  openGraph: {
    title: "Merlik Foundation — Empowering the Boy Child in Kenya",
    description:
      "Mentoring adolescent boys through education, mentorship, and community outreach across Kenya.",
    url: "https://merlikfoundation.org",
    siteName: "Merlik Foundation",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merlik Foundation — Empowering the Boy Child in Kenya",
    description:
      "Mentoring adolescent boys through education, mentorship, and community outreach across Kenya.",
  },
  metadataBase: new URL("https://merlikfoundation.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
