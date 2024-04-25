"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
function Menu() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  const [isActive, setIsActive] = useState(false);
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    animate: { x: 0 },
    exit: { x: "calc(100% + 100px)" },
  };
  return (
    <div className="  z-30 relative md:hidden">
      {/* burger */}
      <div
        onClick={() => setIsActive(!isActive)}
        className="bg-white w-[50px] h-[50px] rounded-full fixed  right-[10px] top-[10px] z-40 flex justify-center items-center cursor-pointer shadow-md "
      >
        <div
          className={`${isActive ? "burgerActive" : ""} burger w-full `}
        ></div>
      </div>
      {/* links */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            exit="exit"
            className="bg-black w-1/2 h-screen right-0 fixed top-0"
          >
            <nav className="  h-full flex items-center justify-center flex-col gap-5">
              {Links.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="hover:text-gray-400 transition-all duration-300 text-white "
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
