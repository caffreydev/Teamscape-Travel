import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SiteStrings from "./constants/SiteStrings";

// const inter = Inter({ subsets: ["latin"] });

// const abel = Abel({ weight: '400', subsets: ['latin'] });
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: SiteStrings.SiteName,
  description: SiteStrings.StrapLine,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={lato.className}>{children}</body>
    </html>
  );
}
