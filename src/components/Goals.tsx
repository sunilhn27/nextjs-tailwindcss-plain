import React from "react";
import Cointainer from "../../public/images/container.png";
import Tick from "../../public/images/tick.png";
import Image from "next/image";
import { AnimationRight } from "./AnimationWrapper";

const Points: React.FC = () => {
  return (
    <AnimationRight delay={1}>
      <div className="flex justify-start items-center space-x-4">
        <div className="">
          <div className="bg-red-500 rounded-full px-2  py-1 flex justify-center items-center">
            <Image src={Tick} alt="tick" />
          </div>
        </div>
        <p className="w-[28rem] leading-snug text-gray-500 font-nunito">
          Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd
          gubergrenv
        </p>
      </div>
    </AnimationRight>
  );
};

function Goals() {
  return (
    <section className="bg-[#FFFFFF] w-full h-[30rem] my-12">
      <div className="flex justify-center items-center">
        <div className="flex">
          <Image src={Cointainer} alt="container" />
        </div>

        <div className=" flex flex-col">
          <div className="flex flex-col -space-y-2">
            <h3 className="font-nunito mb-4 font-bold">Why Choose Us</h3>
            <h1 className="font-nunito text-[2.2rem] font-bold">
              Your Goal is Our Achievement
            </h1>
            <p className="font-nunito text-gray-500 w-[34rem] h-[4.5rem] pt-6 text-[1rem]">
              Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat sed diam voluptua. At vero eos et accusam et justo duo
              dolores et rebum. Stet clita kasd gubergren, no sea takimata
              sanctus.
            </p>
          </div>
          <div className="mt-12 space-y-2">
            <Points />
            <Points />
            <Points />
            <Points />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
