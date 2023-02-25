import { Bellefair, Barlow, Barlow_Condensed } from "@next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
// import {barlow, bellefair} from '@/utils/fonts'

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap"
})

const barlow_con = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-con",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${barlow.variable} ${bellefair.variable} ${barlow_con.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-dark-blue py-8 w-full h-screen">
        <NavBar />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
