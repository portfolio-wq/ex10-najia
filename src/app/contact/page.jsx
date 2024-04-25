import Letter from "@/components/side/Letter";
import React from "react";

function page() {
  return (
    <div className=" px-7">
      <h2 className="text-[7vw]">LET&apos;S CREATE IMPACT TOGETHER </h2>
      <p className=" text-xl md:text-3xl text-gray-500 my-10">
        Open to work! <br />
        Reach out about a project <br />
        To book a 1:1 portfolio review <br />
        Or just to say hello, hallo, olá <br />
      </p>
      <div className="md:text-[10vw] text-[8vw] text-center py-[100px]">
        <Letter letters="najiahi@gmail.com" />
      </div>
    </div>
  );
}

export default page;
