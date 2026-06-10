import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { ConsultationWidget } from "@/components/ConsultationWidget";
import { ScrollProgress } from "@/components/ScrollProgress";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ImpactSetu | Building Digital Bridges",
  description: "A full-service digital solutions agency helping NGOs, trusts, schools, cafes, startups, and businesses establish a powerful digital presence.",
  metadataBase: new URL("https://impactsetu.com"),
  openGraph: {
    title: "ImpactSetu | Building Digital Bridges",
    description: "Establishing a powerful digital presence for modern organizations. Professional websites, SEO, social media growth, and branding.",
    type: "website",
    locale: "en_IN",
    siteName: "ImpactSetu",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpactSetu | Building Digital Bridges",
    description: "Establishing a powerful digital presence for modern organizations.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ScrollProgress />
          <BackgroundOrbs />
          {/* Blurred Background Image Overlay */}
          <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-no-repeat bg-cover bg-center opacity-20 dark:opacity-[0.08] transition-opacity duration-300" style={{ backgroundImage: "url('/backgrounds/abstract_glow_bg.png')" }} />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <ConsultationWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
