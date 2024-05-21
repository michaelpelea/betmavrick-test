import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BetMavrick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>
      <Script dangerouslySetInnerHTML={{
        __html: `function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ar,en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }`
      }}>
      </Script>
      <body className={inter.className}>
        <div className='bg-white dark:bg-slate-800'>
          <Header />
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
