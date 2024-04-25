import Image from "next/image";
import React from "react";
import image1 from "../../../public/featured-clementine.jpg";
import image2 from "../../../public/featured-proj-franz.jpg";
import image3 from "../../../public/featured-proj-petunia.jpg";
import image4 from "../../../public/featu.webp";
import image5 from "../../../public/anfisign.webp";
export default function Projects() {
  const projects = [
    {
      name: "Clementine",
      type: ["UI/UX Design", "Branding", "Art Direction"],
      image: image1,
    },
    {
      name: "Franz",
      type: ["UI/UX Design", "Illustration"],
      image: image2,
    },
    {
      name: "Petunia",
      type: ["UI/UX Design", "Art Direction"],
      image: image3,
    },
    {
      name: "Feat-up",
      type: ["UI/UX Design", "Branding"],
      image: image4,
    },
    {
      name: "Anfisign",
      type: ["Illustration", "Social Media"],
      image: image5,
    },
  ];
  return (
    <section className="pb-[100px]">
      <h2 className="text-[7vw]">All Projects</h2>
      <div className=" gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, i) => (
          <div key={i} className="relative  cursor-pointer ">
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                className=" hover:scale-[1.5] transition-all duration-500 "
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="">
              <div>
                <h3 className="text-xl my-2">{project.name}</h3>
                <div className="  flex  flex-row">
                  {project.type.map((t, i) => (
                    <span className=" text-gray-500" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
