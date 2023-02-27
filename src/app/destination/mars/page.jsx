import Image from "next/image";
import TopHeading from "@/components/TopHeading";
import { mars1, mars2 } from "@/utils/destination-images";
import DestinationNav from "@/components/DestinationNav";
import Article from "../Article";

export default function Mars() {
  return (
    <section className="bg-destination-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans text-center text-sky-blue mt-12 px-6">
      <TopHeading number="01" category="Pick your Destination" />
      <Image
        src={mars2}
        alt="mars"
        width={170}
        className="animate-spin-slow mx-auto mt-8"
      />
      <DestinationNav />
      <Article
        heading="mars"
        content="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!"
        distance="225 mil. km"
        time="9 months"
      />
    </section>
  );
}
