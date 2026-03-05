import type { Metadata } from "next";
import { Sora, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import { BRAND } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-button",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Premium IT Project Services`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Premium IT project services with full support. Affordable, fast, and professional solutions for all your projects.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${BRAND.name} | Premium IT Project Services`,
    description:
      "Premium IT project services with full support. Affordable, fast, and professional solutions for all your projects.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sora.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
