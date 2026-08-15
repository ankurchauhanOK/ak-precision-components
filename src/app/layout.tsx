import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/smartFactory";

const zodiak = localFont({
  src: [
    { path: "../fonts/zodiak-var.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/zodiak-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const sofiaPro = localFont({
  src: [
    {
      path: "../../sofia-pro-cufonfonts/Sofia Pro Regular Az.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../sofia-pro-cufonfonts/Sofia Pro Medium Az.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../sofia-pro-cufonfonts/Sofia Pro Semi Bold Az.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../sofia-pro-cufonfonts/Sofia Pro Bold Az.otf",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-sofia",
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
    <html lang="en" className={`${zodiak.variable} ${sofiaPro.variable} scroll-smooth`}>
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