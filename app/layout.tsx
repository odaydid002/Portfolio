import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Glass from "@/components/container/Glass";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Oday Dev",
  description: "Oulhadj oudai portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollUp = () => {
    setTimeout(() => {
        ScrollTrigger.refresh();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
  }
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative items-center overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}