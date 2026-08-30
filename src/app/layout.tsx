import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { site } from "@/data/smartFactory";

const zodiak = localFont({
  src: [
    { path: "../fonts/zodiak-var.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/zodiak-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const pally = localFont({
  src: [
    { path: "../fonts/pally-variable.woff2", style: "normal", weight: "400 700" },
  ],
  variable: "--font-pally",
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
    <html lang="en" className={`${zodiak.variable} ${pally.variable} ${sofiaPro.variable} scroll-smooth`}>
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