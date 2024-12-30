import { StaticImageData } from "next/image";
import React from "react";
import Seo from "../../public/images/seo.png";
import MobileApps from "../../public/images/phone.png";
import Research from "../../public/images/research.png";
import Image from "next/image";

interface Card {
  icon: StaticImageData;
  title: string;
  param: string;
}

const Service: React.FC<Card> = ({ icon, title, param }) => {
  return (
    <div className="w-[22rem] h-[21rem] border-2 border-gray-300 border-dashed rounded-2xl shadow-md">
      <div className="flex flex-col justify-center items-center text-center py-10">
        <div className="bg-[#FFF1F1] rounded-full p-4">
          <Image src={icon} alt="seo" />
        </div>
        <h1 className="w-[6rem] text-[1.4rem] font-bold"> {title}</h1>
        <p className="mt-6 text-gray-600">{param}</p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <section className="pt-16 font-nunito" id="services">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="mb-0 text-[#F94F4F]">What we Do</h1>
        </div>
        <div className="flex justify-center items-center w-[4rem] text-center leading-snug">
          <h1 className=" text-3xl font-bold">Our Services</h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-3 gap-4">
          <Service
            icon={Seo}
            title="Web Design"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />

          <Service
            icon={MobileApps}
            title="Digital Marketing"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />

          <Service
            icon={Research}
            title="Mobile Apps"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />

          <Service
            icon={MobileApps}
            title="SEO Consultancy"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />

          <Service
            icon={Seo}
            title="Graphic Design"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />

          <Service
            icon={MobileApps}
            title="Business Consultancy"
            param="Lorem ipsum dolor sit amet, consetetur sadi
aliquyam erat, sed diam voluptua. At vero eos
accusam et justo duo dolores"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
