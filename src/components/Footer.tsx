import Image from "next/image";
import React from "react";
import Logo from "./../../public/asserts/Link_margin.png";
import Link from "next/link";

function Footer() {
  return (
    <section className="mt-6  bg-gray-600 relative w-full h-[30rem] flex justify-end items-center font-nunito">
      <div className=" h-[31rem] bg-custom-image bg-cover bg-opacity-5 bg-center w-[38rem]  opacity-10 absolute  left-0"></div> 
      <div className=" w-[70rem]">
        <div className="grid grid-cols-4 text-white  space">
          <div className="flex flex-col space-y-3">
            <Image src={Logo} alt="logo" className="" />
            <h3 className="text-gray-300 w-[15rem] h-[4.5rem] ">
              Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut
              labore et dolore magna uyam erat, sed diam.
            </h3>
          </div>
          <div className="flex flex-col ">
            <div className="mb-2 text-[1.2rem] font-bold">
              <Link href={"/"}>Quick Links</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>Company</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>About</Link>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="mb-2 text-[1.2rem] font-bold">
              <Link href={"/"}>Resources</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/"}>Support</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Terms</Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="mb-2 text-[1.2rem] font-bold">
              <Link href={"/"}>Newsletter</Link>
            </div>
            <div className="relative mt-6">
              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter email"
                className="w-[17.5rem] h-12 pl-4 pr-20 rounded-full border border-gray-300 text-gray-700 focus:outline-none"
              />
              {/* Button */}
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-full w-[8rem]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
