import React from "react";
import Research from "../../public/images/research.png";
import Prototype from "../../public/images/prototype.png";
import Build from "../../public/images/build.png";
import Image, { StaticImageData } from "next/image";
import { AnimationBottom } from "./AnimationWrapper";

interface Card {
  icon: StaticImageData;
  title: string;
  param: string;
}

const Cards: React.FC<Card> = ({ icon, title, param }) => {
  return (
    <AnimationBottom delay={1}>
      <div className="border-2 border-gray-200 border-dashed w-[21rem] h-[20rem] shadow-md rounded-lg px-3">
        <div className="flex justify-center items-center py-6">
          <div className="flex flex-col items-center font-nunito">
            <div className="bg-[#FFF1F1] rounded-full p-4">
              <Image src={icon} alt="reac" />
            </div>
            <h1 className="text-black opacity-75">{title}</h1>
            <div className="w-[20rem] h-[4rem]">
              <p className="text-gray-500">{param}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimationBottom>
  );
};

function About() {
  return (
    <section className="w-full h-[30rem]">
      <div className="flex justify-center items-center text-center">
        <div className="font-nunito mb-2 ">
          <p className="text-orange-600 text-[1.2rem]">About</p>
          <h1 className="text-[1.7rem] font-bold">Work Process</h1>
        </div>
      </div>
      <div className="flex justify-center items-center text-center ">
        <div className="grid grid-cols-3 gap-5">
          <Cards
            icon={Research}
            title="Research"
            param="Lorem ipsum dolor sit amet, consetetur sadi
               aliquyam erat, sed diam voluptua. At vero eos
               accusam et justo duo dolores"
          />

          <Cards
            icon={Prototype}
            title="Prototype"
            param="Lorem ipsum dolor sit amet, consetetur sadi
               aliquyam erat, sed diam voluptua. At vero eos
               accusam et justo duo dolores"
          />

          <Cards
            icon={Build}
            title="Build"
            param="Lorem ipsum dolor sit amet, consetetur sadi
               aliquyam erat, sed diam voluptua. At vero eos
               accusam et justo duo dolores"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
