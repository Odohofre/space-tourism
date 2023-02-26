"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  // Check if the current route matches the href prop
  const active = usePathname() === href;

  return (
    <li
      className={`flex justify-center items-center border rounded-full ${
        active ? "bg-white text-dark-blue" : "text-white border-white/25"
      } w-10 h-10`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function TechNav() {
  return (
    <nav>
      <ul className="flex w-full justify-center space-x-4 font-serif text-base leading-4 mt-8 mb-px">
        <NavLink href="/technology">1</NavLink>

        <NavLink href="/technology/spaceport">2</NavLink>

        <NavLink href="/technology/capsule">3</NavLink>
      </ul>
    </nav>
  );
}
