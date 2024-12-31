import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./../../public/asserts/Link_margin.png";

function NavBar() {
  return (
    <section className="py-4 sticky top-0 bg-white shadow-md z-50">
      <div className="">
        <nav className="flex mx-[3.5rem] justify-around text-center ">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo"></Image>
          </Link>
          <div className="flex space-x-6 justify-center items-center text-xl text-gray-600 ">
            <Link className="hover:text-orange-500 no-underline" href={"/"}>
              About
            </Link>
            <Link
              className="hover:text-orange-500 cursor-pointer no-underline"
              href={"#services"}
            >
              Services
            </Link>
            <Link
              className="hover:text-orange-500 cursor-pointer no-underline"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-orange-500 cursor-pointer no-underline"
              href={"#projects"}
            >
              Projects
            </Link>
            <Link
              className="hover:text-orange-500 cursor-pointer no-underline"
              href={"#blogs"}
            >
              Blog
            </Link>
            <Link
              className="hover:text-orange-500 cursor-pointer no-underline"
              href={"#contact"}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
