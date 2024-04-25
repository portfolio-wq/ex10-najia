import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-black">
      <section className=" px-7  text-white py-[100px]">
        <div className="w-[70%] mb-10">
          <h4 className="md:text-[3vw] text-[5vw] text-gray-500">
            Interested in working with me?
          </h4>
          <h4 className="md:text-[3vw] text-[5vw]">
            Together, we hold the power to design the world that we envision
          </h4>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className=" text-gray-500 text-xl">Send a message</span>
            <span className="text-xl">najiahi@test.mail</span>
          </div>
          <div className="flex flex-col md:pr-[100px] text-lg items-start ">
            <a
              href=""
              className="flex justify-center items-center gap-2 hover:text-gray-500 transition-all duration-200"
            >
              <MdOutlineArrowOutward />
              Linkedin
            </a>
            <a
              href=""
              className="flex justify-center items-center gap-2 hover:text-gray-500 transition-all duration-200"
            >
              <MdOutlineArrowOutward />
              Instagram
            </a>
            <a
              href=""
              className="flex justify-center items-center gap-2 hover:text-gray-500 transition-all duration-200"
            >
              <MdOutlineArrowOutward />
              Dribb ble
            </a>
            <a
              href=""
              className="flex justify-center items-center gap-2 hover:text-gray-500 transition-all duration-200"
            >
              <MdOutlineArrowOutward />
              Tumbler
            </a>
            <div className="flex flex-col mt-10">
              <span className="hover:text-gray-500 transition-all duration-200 cursor-pointer">
                Work by Najia
              </span>
              <span className="hover:text-gray-500 transition-all duration-200 cursor-pointer">
                About Najia
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className=" text-gray-500 text-center  w-full pb-5">
        Copyright © 2024 Najia. All rights reserved. Development by khalid
      </div>
    </div>
  );
}
