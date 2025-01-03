"use client";
import React, { useEffect, useState } from "react";
import heroImg from "../../public/images/heroimg.png";
import Image from "next/image";
import { ZoomIn, AnimationLeft, AnimationRight, AnimationBottom } from "./AnimationWrapper";

function HeroSection() {
  const [toggleText, setToggleText] = useState("Template");

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText((prev) => (prev === "Template" ? "Layout" : "Template"));
    }, 3000); // Toggles every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-[#BFBFF] py-12">
      <div className="w-full  h-[40rem]">
        <div className=" flex justify-center items-center">
          <AnimationRight delay={1}>
            <div className="flex flex-col">
              <h1 className="w-[40rem] h-[6rem] text-[3rem] font-nunito font-bold">
                Creative Multipurpose Bootstrap
                <ZoomIn delay={1}>
                  <span className="text-[#F94F4F]">{toggleText}</span>
                </ZoomIn>
              </h1>
              <p className="w-[35rem] h-[3rem] mt-16 text-gray-500 leading-snug">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </p>
              <div>
                <ZoomIn delay={0.1}>
                  <div className="w-[10rem] h-[3rem] bg-[#38424D] mt-10 text-white rounded-tl-full rounded-br-full flex items-center justify-center shadow-md hover:text-orange-300">
                    Get Started
                  </div>
                </ZoomIn>
              </div>
            </div>
          </AnimationRight>
          <div className="">
            <AnimationLeft delay={1}>
              <Image src={heroImg} alt="heroimg" />
            </AnimationLeft>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
