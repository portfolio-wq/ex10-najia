import React from "react";
import image1 from "../../public/featured-clementine.jpg";
import image2 from "../../public/featured-proj-franz.jpg";
import image3 from "../../public/featured-proj-petunia.jpg";
import Image from "next/image";
import Letter from "./side/Letter";
function FeaturedProject() {
  return (
    <section className="pb-[100px] px-7">
      <div className="text-[7vw]">
        <Letter letters="Featured Projects" />
      </div>
      <div
        // style={{
        //   gridTemplateColumns: "repeat(auto-fit,minmax(400px,auto))",
        //   display: "grid",
        // }}
        className="flex flex-wrap md:flex-nowrap gap-8"
      >
        <div className="relative overflow-hidden cursor-pointer ">
          <Image
            src={image1}
            alt="project1"
            sizes="100vw"
            className=" hover:scale-[1.5] transition-all duration-500 "
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="absolute top-0 text-white flex gap-4 p-5">
              <span>UI/UX </span>
              <span>Branding</span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer ">
          <Image
            src={image2}
            alt="project1"
            className=" hover:scale-[1.5] transition-all duration-500"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="absolute top-0 text-white flex gap-4 p-5">
              <span>UI/UX </span>
              <span>Branding</span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer ">
          <Image
            src={image3}
            alt="project1"
            sizes="100vw"
            className=" hover:scale-[1.5] transition-all duration-500"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="absolute top-0 text-white flex gap-4 p-5">
              <span>UI/UX </span>
              <span>Branding</span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
