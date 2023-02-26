export default function TopHeading({ number, category }) {
  return (
    <h1 className="font-sans1 text-white tracking-[2.7px] uppercase">
      <span className="font-bold text-white/25 mr-4">{number}</span>
      {category}
    </h1>
  );
}
