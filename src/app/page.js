import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-home-background-mobile bg-no-repeat bg-cover bg-center bg-fixed h-full w-full font-sans text-center text-sky-blue mt-12 px-6">
      <h1 className="text-base uppercase tracking-[2.7px] leading-[19.2px]">So, you want to travel to </h1>
      <h2 className="text-white text-[80px] leading-tight font-serif uppercase mt-4">Space</h2>
      <p className="text-[15px] mt-4 leading-6 mb-[1px]">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button type="" className="text-xl leading-[22.92px] tracking-wider bg-white text-dark-blue rounded-full h-[150px] w-[150px] uppercase mt-20">Explore</button>
    </section>
  );
}
