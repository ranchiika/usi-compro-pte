import type { Metadata } from "next";
import { Prompt, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "USI Petrotrans Energi",
  description: "The Evolution: Integrated Logistics Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} ${jakarta.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}