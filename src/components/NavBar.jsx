"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo, close, open } from "@/utils/shared-images";

function NavLink({ href, number, page, Click }) {
  return (
    <Link href={href} className="block" onClick={Click}>
      <span className="font-bold mr-3">{number}</span>
      {page}
    </Link>
  );
}

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef();

  const handleLinkClick = () => {
    setOpen(false);
  };
  
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between text-base mt-[1px] px-8">
        {/* Logo */}
        <div className="bg-white rounded-full md:w-full flex items-center flex-shrink">
          <Link href="/">
            <Image src={logo} alt="Brand Logo" width={40} height={40} />
          </Link>
        </div>

        {/* open and close button */}
        <div className="block md:hidden">
          <button
            className={`flex items-center absolute top-7 right-0 z-50 py-2 ${
              isOpen ? "px-6" : "px-4"
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Image
              src={isOpen ? close : open}
              ref={menuRef}
              alt="Toggle menu"
              className={`${isOpen ? "w-5" : "w-6"}`}
            />
          </button>
        </div>

        {/* MOBILE NAV */}
        {/* side menu starts here */}

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white/[0.04] fixed top-0 right-0 h-screen w-2/3 z-40 backdrop-blur-2xl`}
        >
          <div className="mt-28 pl-8 space-y-8 text-white font-sans1 tracking-[2.7px] uppercase">
            <NavLink
              href="/"
              number="00"
              page="home"
              Click={handleLinkClick}
            />
            <NavLink
              href="/destination"
              number="01"
              page="destination"
              Click={handleLinkClick}
            />
            <NavLink
              href="/crew"
              number="02"
              page="crew"
              Click={handleLinkClick}
            />
            <NavLink
              href="/technology"
              number="03"
              page="technology"
              Click={handleLinkClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
