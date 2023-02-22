"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { logo, close, open } from "@/utils/shared-images";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef();

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleLinkClick();
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between text-base mt-[1px]">
        {/* Logo */}
        <div className="bg-white rounded-full md:w-full flex items-center flex-shrink">
          <a href="">
            <Image src={logo} alt="Brand Logo" width={40} height={40} />
          </a>
        </div>

        {/* open and close button */}
        <div className="block md:hidden">
          <button
            className={`flex items-center absolute top-7 right-0 z-50 py-2 ${
              isOpen ? "px-6" : "px-4"
            }`}
            onClick={() => setOpen(!isOpen)}
          >
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
          } bg-white/[0.04] fixed top-0 right-0 h-screen w-2/3 z-40`}
        >
          <div className="mt-28 pl-8 space-y-8 text-white font-sans tracking-[2.7px]">
            <a href="#" className="block" onClick={handleLinkClick}>
              00 HOME
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              01 DESTINATION
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              02 CREW
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              03 TECHNOLOGY
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
