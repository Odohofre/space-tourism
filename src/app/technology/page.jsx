import Image from "next/image";
import {
  launchImagePortrait,
  launchImageLandscape,
} from "@/utils/technology-images";
import Nav from "@/components/Nav";
import TopHeading from "@/components/TopHeading";
import Article from "@/components/Article";

export default function Vechicle() {
  return (
    <section className="bg-technology-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans1 text-center mt-6 px-">
      <TopHeading number="03 " category="Space launch 101" />
      <Image
        src={launchImageLandscape}
        alt="rocket booster"
        priority
        className="mb-px mt-8"
      />
      <Nav />
      <Article
        heading="The terminology..."
        subhead="Launch vehicle"
        content="A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!"
      />
    </section>
  );
}
