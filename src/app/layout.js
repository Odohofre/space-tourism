"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bellefair, Barlow, Barlow_Condensed } from "@next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
  display: "swap",
});

const barlow_con = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-con",
  display: "swap",
});

export default function RootLayout({ children }) {
  const [backgroundImage, setBackgroundImage] = useState(
    "bg-dark-blue"
  );
  const path = usePathname();

  useEffect(() => {
    if (path.includes("technology")) {
      setBackgroundImage("bg-technology-background-mobile");
    } else if (path.includes("destination")) {
      setBackgroundImage("bg-destination-background-mobile");
    } else {
      setBackgroundImage("bg-home-background-mobile");
    }
  }, [path]);

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
      <body
        className={`${backgroundImage} bg-dark-blue py-8 w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed `}
      >
        <NavBar />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
