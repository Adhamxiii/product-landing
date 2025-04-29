import { navLink } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "../Helper/ThemeToggle";

const Navbar = ({ openNan }: { openNan: () => void }) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full  ${
        navBg ? "bg-pink-700 shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center justify-between h-full sm:w-[80%] w-[90%] mx-auto">
        <div className="text-white font-bold text-2xl sm:text-3xl">LOGO</div>

        <div className="hidden lg:flex items-center space-x-10">
          {navLink.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="text-white hover:text-green-300 font-semibold transition-all duration-200"
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="w-auto px-5 py-2.5 bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <FaShoppingBag className="mr-3 w-5 h-5" />
            Buy Now
          </button>

          <ThemeToggle />

          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
            onClick={openNan}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
