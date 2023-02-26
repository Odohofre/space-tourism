import Image from "next/image";
import {
  spacePortImageLandscape,
  spacePortImagePortrait,
} from "@/utils/technology-images";
import TechNav from "@/components/TechNav";
import TopHeading from "@/components/TopHeading";
import Article from "@/components/Article";

export default function Spaceport() {
  return (
    <section className="bg-technology-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans1 text-center mt-6 px-">
      <TopHeading number="03" category="Space launch 101" />
      <Image
        src={spacePortImageLandscape}
        alt="a man facing a rocket booster"
        priority
        className="mb-px mt-8"
      />
      <TechNav />
      <Article
        heading="The terminology..."
        subhead="Spaceport"
        content="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. Based in the 
        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
        of the Earth’s rotation for launch."
      />
    </section>
  );
}
