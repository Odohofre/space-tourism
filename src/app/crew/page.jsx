"use client";

import { useState, UseRef } from "react";
import Image from "next/image";

import TopHeading from "@/components/TopHeading";
import Article from "./Article";
import data from "@/data.json";

import SwiperCore, {
  Pagination,
  Mousewheel,
  HashNavigation,
  History,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

SwiperCore.use([Mousewheel, Pagination, HashNavigation, History]);

const crews = data.crew;

const imagewidth = {
  "Douglas Hurley": "w-[177px]",
  "Mark Shuttleworth": "w-[154px]",
  "Victor Glover": "w-[180px]",
  "Anousheh Ansari": "w-[226px]",
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderBullet = (index, className) => {
    return `<span class="inline-block w-2.5 h-2.5 rounded-full bg-white/[0.17] mx-1 ${className} bullet-${index} ${activeIndex === index  ? 'bg-white' : 'bg-white/[0.17]'}" onClick={() => setActiveIndex(index)}></span>`
  }

  // const handleSlideChange;

  const params = {
    slidesPerView: 1,
    direction: "horizontal",
    // hashNavigation: true,
    // history: {
    //   key:"crew"
    // },
    mousewheel: true,
    loop: true,
    pagination: {
      clickable: true,
      // el: ".swiper-pagination",
      // type: "bullets",
      // bulletClass: 'my-bullet',
      // bulletActiveClass: 'my-bullet-active',
      // renderBullet: function (index, className) {
      //   return `
      //   <span class="inline-block w-2.5 h-2.5 rounded-full bg-white/[0.17] mx-1 ${className} bullet-${index} ${activeIndex === index  ? 'bg-white' : 'bg-white/[0.17]'}" onClick={() => setActiveIndex(index)}></span>
      //   `;
      // },
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.activeIndex);
    },
  };

  return (
    <section className="h-full w-full font-sans text-center text-sky-blue mt-12 px-6">
      <TopHeading number="02" category="Meet your crew" />
      <Swiper
        // modules={[Pagination, Mousewheel]}
        {...params}
      >
        {crews.map((crew) => (
          <SwiperSlide key={crew.name} data-history={crew.name}>
            <div className="{}">
              <Image
                src={crew.images.webp}
                width={150}
                height={350}
                className={` mt-8 mx-auto`}
                priority
              />
            </div>
            
            <div className="swiper-pagination"></div>

            <Article
              heading={crew.role}
              subhead={crew.name}
              content={crew.bio}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
