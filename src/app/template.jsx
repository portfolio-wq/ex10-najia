"use client";
import React, { useEffect } from "react";
import Navbare from "@/components/side/Navbare";
import Footer from "@/components/side/Footer";
import animation from "@/tools/animation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Menu from "@/components/side/Menu";

function Template({ children }) {
  const currentpath = usePathname();
  useEffect(() => {
    animation();
  }, []);
  const pathNames = [
    {
      path: "/",
      desc: ["UI/UX Designer,", "Art,", "Branding"],
      name: "Najia Ait Rabhi",
    },
    {
      path: "/work",
      desc: ["Quality,", "Professional,", "Top notch"],
      name: "Work Collection",
    },
    {
      path: "/about",
      desc: ["Art,", "Adventure,", "Fun"],
      name: "About Najia Ait Rabhi",
    },
    {
      path: "/contact",
      desc: ["Send some love"],
      name: "say hi to Najia Ait Rabhi",
    },
  ];
  return (
    <div>
      <div
        id="transition"
        className="min-h-screen z-50 fixed top-0 left-0 w-full bg-black "
      >
        {pathNames.map((path, i) => (
          <motion.div key={i}>
            {currentpath === path.path && (
              <div className=" p-5">
                <h1 className="text-white text-3xl md:text-6xl font-semibold mb-5">
                  {path.name}
                </h1>
                <div className="text-white text-xl ">
                  {path.desc.map((d, i) => (
                    <span key={i}> {d}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div>
        <Menu />
        <Navbare />
        <div className="pt-[100px] md:pt-0"> {children}</div>

        <Footer />
      </div>
    </div>
  );
}

export default Template;
