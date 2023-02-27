import Image from "next/image";
import TopHeading from "@/components/TopHeading";
import { europa1, europa2 } from "@/utils/destination-images";
import DestinationNav from "@/components/DestinationNav";
import Article from "../Article";

export default function Europa() {
  return (
    <section className="bg-destination-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans text-center text-sky-blue mt-12 px-6">
      <TopHeading number="01" category="Pick your Destination" />
      <Image
        src={europa2}
        alt="europa moon"
        width={200}
        className="animate-spin-slow mx-auto mt-8"
      />
      <DestinationNav />
      <Article
        heading="Europa"
        content="The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin."
        distance="628 mil. km"
        time="3 years"
      />
    </section>
  );
}
