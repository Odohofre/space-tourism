import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex w-full justify-center space-x-4 font-serif text-base leading-4 mt-8 mb-px">
        <li className="flex justify-center items-center border rounded-full text-dark-blue bg-white w-10 h-10">
          <Link href="/" className="">
            1
          </Link>
        </li>
        <li className="flex justify-center items-center border border-white/25 rounded-full text-white w-10 h-10">
          <Link href="/capsule">2</Link>
        </li>
        <li className="flex justify-center items-center border border-white/25 rounded-full text-white w-10 h-10">
          <Link href="/spaceport">3</Link>
        </li>
      </ul>
    </nav>
  );
}
