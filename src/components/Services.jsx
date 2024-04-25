"use client";
import React, { useState } from "react";
import office from "../../public/office.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
function Services() {
  const container = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },

    exit: {
      opacity: 0,
      height: 0,
      // transition: { ease: "easeInOut" },
    },
  };

  const [reveal, setReveal] = useState(null);
  const services = [
    {
      id: 0,
      name: "Branding",
      desc: `Craft a brand identity that's a true masterpiece, molding it into something that reflects your values and makes your audience envious. From captivating logos and unforgettable naming to style guides and eye-catching illustrations, we'll infuse your brand with a unique personality. Together, we'll design a brand that's truly exceptional. `,
      tools: [
        "Brand Identity",
        "Brand Positioning",
        "Naming",
        "Brand Strategy",
        "Styleguide",
      ],
    },
    {
      id: 1,
      name: "Strategy",
      desc: `Elevate your strategy game with a branding or product plan that aligns with your goals and outshines the competition. Let me help you harness valuable insights in concept development, brand strategy, creative direction, and research, setting you apart and making your competitors green with envy.  `,
      tools: [
        "Creative Direction",
        "Concept Development",
        "Design Strategy",
        "Research and Strategy",
      ],
    },
    {
      id: 2,
      name: "UI/UX Design",
      desc: `Create websites, web apps, or mobile apps that impress and leave a memorable user experience. From crafting user flows and moodboards to designing web and mobile applications and websites, I will ensure that your digital presence is user-friendly and with precision, backed by a cohesive design system. Your customers are in for an experience they'll rave about. `,
      tools: ["Moodboard", "Web & Mobile apps", "Websites", "Design Systems"],
    },
    {
      id: 3,
      name: "Interaction",
      desc: `Elevate your brand with engaging interactions that tell your story and leave a lasting impact. From prototyping to small interactions, I will help you bring your brand's narrative to life.`,
      tools: ["Prototyping", "Micro-interactions", "Motion Design"],
    },
  ];
  return (
    <section>
      {" "}
      <div className="flex justify-between gap-10 flex-wrap md:flex-nowrap pb-[100px] px-7">
        <div className="md:w-[50%]">
          <h3 className="text-2xl mb-5">Services</h3>
          <p className="text-gray-400 text-xl ">
            From discovery to delivering a full product, my mission is to help
            businesses build amazing experiences through a first-class design.
            Despite my main expertise UI/UX Design, a large range of skillset,
            from visual identity to motion, is part of my work.{" "}
          </p>
        </div>

        <div className="md:w-[50%] w-full">
          {services.map((serv, i) => (
            <div key={i}>
              <div
                onClick={() => setReveal(serv.id === reveal ? null : serv.id)}
                className="flex justify-between md:text-[4vw] text-[5vw] cursor-pointer"
              >
                <span>{serv.name}</span>
                <button>{reveal === serv.id ? "-" : "+"}</button>
              </div>
              <AnimatePresence>
                {reveal === serv.id && (
                  <motion.div
                    transition={{ duration: 0.5, ease: "anticipate" }}
                    variants={container}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className=" origin-top"
                  >
                    <p className="md:text-xl  mb-4">{serv.desc}</p>
                    <div className="text-gray-400 flex flex-col gap-3">
                      {serv.tools.map((tool, i) => (
                        <span key={i}>{tool}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="bg-black w-full h-[1px] mt-4 "></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image src={office} alt="najia" />
      </div>
    </section>
  );
}

export default Services;
