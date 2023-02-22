import { Bellefair, Barlow_Condensed } from "@next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
// import {barlow, bellefair} from '@/utils/fonts'

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-bellefair',
  display: 'swap'
});

const barlow = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-barlow',
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${barlow.variable} ${bellefair.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-dark-blue px-6 py-8 w-full h-full">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
