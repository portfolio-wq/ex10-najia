import Link from "next/link";
import React from "react";

function Navbare() {
  const Links = [
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className=" justify-between px-7 py-6 text-xl bg-transparent sticky top-0 hidden md:flex">
      <Link href="/"> Najia. Rabhi</Link>
      <div>
        <div className="flex gap-6 text-xl ">
          {Links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="hover:text-gray-400 transition-all duration-300 "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbare;
