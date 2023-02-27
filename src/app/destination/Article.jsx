function Travel({ head, subhead }) {
  return (
    <div className="uppercase space-y-3 mt-8">
      <h3 className="font-sans1 text-sm leading-[16.8px] tracking-[2.36px]">{head}</h3>
      <h4 className="font-serif text-white text-[28px] leading-8">{subhead}</h4>
    </div>
  );
}

export default function Article({ heading, content, distance, time }) {
  return (
    <article className="mt-5 pb-14">
      <h2 className="font-serif text-[56px] leading-[64px] uppercase text-white">{heading}</h2>
      <p className="font-sans2 text-[15px] leading-[25px]">{content}</p>
      <div className="w-full h-0.5 bg-[#383b4b] mt-8"></div>
      <Travel head="avg. distance" subhead={distance} />
      <Travel head="est. time" subhead={time} />
    </article>
  );
}
