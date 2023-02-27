import Image from "next/image";
import TopHeading from "@/components/TopHeading";
import { titan1, titan2 } from "@/utils/destination-images";
import DestinationNav from "@/components/DestinationNav";
import Article from "../Article";

export default function Titan() {
  return (
    <section className="bg-destination-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans text-center text-sky-blue mt-12 px-6">
      <TopHeading number="01" category="Pick your Destination" />
      <Image
        src={titan2}
        alt="titan moon"
        width={170}
        className="animate-spin-slow mx-auto mt-8"
      />
      <DestinationNav />
      <Article
        heading="Titan"
        content="The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn."
        distance="1.6 bil. km"
        time="7 years"
      />
    </section>
  );
}
