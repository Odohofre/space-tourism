import Image from "next/image";
import {
  capsuleImageLandscape,
  capsuleImagePortrait,
} from "@/utils/technology-images";
import TechNav from "@/components/TechNav";
import TopHeading from "@/components/TopHeading";
import Article from "@/components/Article";

export default function Capsule() {
  return (
    <section className="bg-technology-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans1 text-center mt-6 px-">
      <TopHeading number="03" category="Space launch 101" />
      <Image
        src={capsuleImageLandscape}
        alt="space capsule"
        priority
        className="mb-px mt-8"
      />
      <TechNav />
      <Article
        heading="The terminology..."
        subhead="Space capsule"
        content="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
        you'll spend your time during the flight. It includes a space gym, cinema, 
        and plenty of other activities to keep you entertained."
      />
    </section>
  );
}
