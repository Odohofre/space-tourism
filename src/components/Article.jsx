export default function Article({ heading, subhead, content }) {
  return (
    <article className="text-sky-blue px-6 mt-6">
      <h2 className="uppercase text-sm mb-px tracking-[2.36px]">{heading}</h2>
      <h3 className="uppercase text-2xl leading-[28px] mt-2 text-white font-serif">
        {subhead}
      </h3>
      <p className="mt-4 text-[15px] leading-6 font-sans2">{content}</p>
    </article>
  );
}
