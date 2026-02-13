import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globaldienste.de"),
  title: {
    default:
      "RM GLOBAL Gebäudedienste | Professionelle Reinigung Frankfurt & Mannheim",
    template: "%s | RM GLOBAL Gebäudedienste",
  },
  description:
    "Seit 1999 Ihr Partner für Gebäudereinigung, Büroreinigung, medizinische Reinigung & Winterdienst in Frankfurt, Mannheim und der Rhein-Main Region.",
  keywords: [
    "Gebäudereinigung Frankfurt",
    "Büroreinigung",
    "Facility Management",
    "Winterdienst",
    "Glasreinigung",
    "Gebäudereinigung Mannheim",
    "Reinigungsfirma Frankfurt",
  ],
  authors: [{ name: "RM GLOBAL Gebäudedienste GmbH" }],
  creator: "RM GLOBAL Gebäudedienste GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.globaldienste.de",
    siteName: "RM GLOBAL Gebäudedienste",
    title:
      "RM GLOBAL Gebäudedienste | WERTE. pflegen | schützen | erhalten.",
    description:
      "Professionelle Gebäudereinigung in Frankfurt und Mannheim seit 1999.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
