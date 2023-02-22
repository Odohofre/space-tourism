import { Bellefair, Barlow } from "@next/font/google";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-bellefair',
  display: 'swap'
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-barlow',
  display: 'swap'
});

export { bellefair, barlow };
