import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { site } from "@/data/smartFactory";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-viewport-bg text-deep-forest font-sans antialiased">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 lg:mt-[60px] lg:ml-6 lg:mr-6">
          <div className="flex-1 lg:min-h-0 lg:overflow-y-auto">
            <div className="mx-4 mt-4 rounded-[29px] shadow-soft bg-warm-bg lg:mx-0 lg:mt-0 lg:rounded-tl-[30px] lg:rounded-tr-[30px]">
              <div className="px-3 py-4 md:px-16 lg:px-[120px] lg:py-0">
                <main className="flex-1">{children}</main>
              </div>
            </div>
            <div className="h-[140px] lg:hidden" />
          </div>
        </div>
      </body>
    </html>
  );
}
