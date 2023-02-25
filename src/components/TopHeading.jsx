export default function TopHeading({ number, category }) {
  return (
    <h1 className="font-sans1 text-white tracking-[2.7px] uppercase">
      <span className="text-white/25">{number}</span>
      {category}
    </h1>
  );
}