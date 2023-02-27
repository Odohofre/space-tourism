import Image from "next/image";
import TopHeading from "@/components/TopHeading";
import { moon1, moon2 } from "@/utils/destination-images";
import DestinationNav from "@/components/DestinationNav";
import Article from "./Article";

export default function Moon() {
  return (
    <section className="bg-destination-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans1 text-center text-sky-blue mt-12 px-6">
      <TopHeading number="01" category="Pick your Destination" />
      <Image
        src={moon2}
        alt="moon"
        width={200}
        className="animate-spin-slow mx-auto mt-8"
      />
      <DestinationNav />
      <Article
        heading="moon"
        content="See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites."
        distance="384,400km"
        time="3 days"
      />
    </section>
  );
}
