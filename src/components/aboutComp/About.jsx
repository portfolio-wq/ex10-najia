import Image from "next/image";
import React from "react";
import image from "../../../public/photo.jpg";
import Letter from "../side/Letter";
function About() {
  const work = [
    {
      periode: "2023 - Present",
      place: "Loka",
      role: "Design Manager and Product Designer",
      projects: [
        { name: "Anfising", desc: "Freelancer as illustrator" },
        { name: "Concepts Archive", desc: "Sharing design concepts in Social" },
      ],
    },
    {
      periode: "2021",
      place: "Polerio Doce",
      role: `Branding Strategy for "Young Talent of Gastronomy of 2019" `,
      projects: [
        {
          name: "Alquimia do Ferro",
          desc: " Book editorial design",
        },
        {
          name: "Mobeybou ",
          desc: " UX/UI Designer",
        },
      ],
    },
    {
      periode: "2020",
      place: "crisss",
      role: `Portfolio design and development`,
      projects: [
        {
          name: "Kilograma",
          desc: " Packaging design and Motion graphics",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-[7vw]">HAVING FUN WHILE IMPACTING THE WORLD </h1>
      <>
        <div className="min-w-[300px] min-h-[400px] relative md:hidden">
          <Image
            src={image}
            className=" rounded-md"
            style={{ objectFit: "cover" }}
            fill
            alt="Picture of the author"
            quality={100}
            placeholder="blur"
          ></Image>
        </div>
        <div className=" hidden md:block">
          <Image
            src={image}
            className=" rounded-md"
            alt="Picture of the author"
            quality={100}
            placeholder="blur"
          ></Image>
        </div>
        <div></div>
      </>
      <p className="md:text-[2.5vw] text-[5vw] md:w-[60%] md:py-[100px] py-[50px] font-[300]">
        I am Najia Ait Rabhi , a passionated designer, manager and keen
        observer. Specialized in immersive web experiences, I blend elegant
        aesthetics, interactive engaging animations, as well as intuitive
        usability to make the best of every project.
      </p>
      {/*  */}
      <div>
        <h2 className="md:text-[6vw] text-[5vw] mb-10">
          <Letter letters="Work, Experience, Highlights" />
        </h2>
        <div className="flex flex-col">
          {work.map((w, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="md:text-[2rem] text-xl   ">{w.periode}</h3>
              <div className="w-full h-[1px] bg-black"></div>
              <div className="md:self-end md:w-[50%] my-10">
                <div className="flex flex-col gap-4 ">
                  <span className=" text-xl font-semibold">{w.place}</span>
                  <span>{w.role}</span>
                </div>

                <div className="w-full h-[1px] bg-black my-4"></div>
                <div className=" flex gap-4 ">
                  {w.projects.map((proj, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-lg">{proj.name}</span>
                      <span className="font-[200]">{proj.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
