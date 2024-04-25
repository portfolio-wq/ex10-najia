"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function YearsOfExp() {
  const [onEnter, setOnenter] = useState(false);
  return (
    <section className="w-[70%] pb-[100px] px-7">
      {" "}
      <ScrollTrigger onEnter={() => setOnenter(true)}>
        <div>
          <p className="md:text-[3vw] text-[20px] ">
            Elevating businesses through expertise in creating remarkable
            digital user experiences, driving innovation, and delivering
            impeccable design solutions
          </p>
        </div>
        {/*  */}
        <div className="flex gap-4 ">
          <div className="flex flex-col">
            <span className="text-[10vw] ">
              +{onEnter && <CountUp start={0} end={17} delay={1} />}
            </span>

            <span className="text-gray-500 ">Total Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10vw] ">
              +{" "}
              {onEnter && (
                <CountUp start={0} end={4} delay={1} duration={2.5} />
              )}
            </span>

            <span className="text-gray-500 ">Total Projects</span>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}

export default YearsOfExp;
