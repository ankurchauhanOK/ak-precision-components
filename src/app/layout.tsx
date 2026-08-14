import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/smartFactory";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-viewport-bg text-deep-forest font-sans antialiased">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 lg:mt-[60px] lg:ml-6 lg:mr-6 lg:h-[calc(100vh-60px)] lg:overflow-y-auto bg-warm-bg lg:rounded-tl-[30px] lg:rounded-tr-[30px] lg:shadow-soft">
          <div className="flex-1 px-6 md:px-16 lg:px-[120px]">
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}