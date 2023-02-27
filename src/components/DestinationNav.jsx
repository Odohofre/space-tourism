"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  // Check if the current route matches the href prop
  const active = usePathname() === href;

  return (
    <li
      className={`flex items-center justify-center text-sm leading-4 w-full ${
        active ? "border-b-[3px] border-white text-white" : "text-sky-blue"
      } w-10 h-10`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function DestinationNav() {
  return (
    <nav>
      <ul className="flex items-center justify-center uppercase font-sans1 tracking-[2.36px] space-x-7 mt-6">
        <NavLink href="/destination">moon</NavLink>
        <NavLink href="/destination/mars">mars</NavLink>
        <NavLink href="/destination/europa">europa</NavLink>
        <NavLink href="/destination/titan">titan</NavLink>
      </ul>
    </nav>
  );
}
