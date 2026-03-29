import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative items-center overflow-x-hidden">
        <div 
          className="rounded-full w-100 h-250 z-0 opacity-20 fixed left-50 bg-primary anime-fade" 
          style={{
            filter:"blur(150px)",
            transform: "rotateZ(-50deg)"
          }}
        ></div>
        <div 
          className="bg-secondary rounded-full w-100 h-250 z-0 opacity-20 fixed right-50 top-50 anime-fade" 
          style={{
            filter:"blur(150px)",
            transform: "rotateZ(50deg)"
          }}
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}