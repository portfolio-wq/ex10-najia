"use client";
import React from "react";
import image from "../../public/header.jpg";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import Letter from "./side/Letter";
function Header() {
  const name = "najia. ait rabhi";
  const about = [
    { title: "Currently", info: "Design Manager at Loka" },
    { title: "Freelancer", info: "Anfifign & Others" },
    { title: "Specializec at", info: "UI/UX Design, Websites & Branding" },
    { title: "Empowering", info: "Digital Products & Brands" },
    { title: "Enthusiastic by", info: "Art, Digital & Technoloy" },
    { title: "From", info: "Morocco" },
  ];
  return (
    <header className=" pb-[100px] px-7">
      <>
        <div
          className="min-w-[300px] min-h-[400px] relative md:hidden
"
        >
          <Image
            src={image}
            className=" rounded-md "
            style={{ objectFit: "cover" }}
            fill
            alt="Picture of the author"
            quality={100}
            placeholder="blur"
          ></Image>
        </div>
        <div
          className=" hidden md:block
"
        >
          <Image
            src={image}
            className=" rounded-md "
            alt="Picture of the author"
            quality={100}
            placeholder="blur"
          ></Image>
        </div>
        <div>
          <div className="font-[400]  uppercase md:text-[10vw] text-[9vw] text-center ">
            <Letter letters="Najia.Ait Rabhi" />
          </div>
        </div>
      </>
      {/*  */}
      <div className="flex justify-between gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {about.slice(0, 3).map((left, i) => (
            <div key={i}>
              <span className=" text-gray-400/50 text-xl">{left.title}</span>
              <p>{left.info}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {about.slice(3, 6).map((left, i) => (
            <div key={i}>
              <span className=" text-gray-400/50 text-xl">{left.title}</span>
              <p>{left.info}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
