import Image, { StaticImageData } from "next/image";
import React from "react";
import CreativeDesign from "../../public/images/creative-design.png";
import webdesign from "../../public/images/webdesign.png";

interface Work {
  icon: StaticImageData;
  title: string;
  param: string;
}

const Work: React.FC<Work> = ({ icon, title, param }) => {
  return (
    <div className="w-[18rem] h-[22rem] shadow-md rounded-md">
      <div className="flex flex-col">
        <Image
          src={icon}
          alt="work1"
          className="w-[18rem] h-[16rem] rounded-md"
        />
        <div className="mx-2">
          <h1 className="mb-2">{title}</h1>
          <p className="mt-0 text-gray-500">{param}</p>
        </div>
      </div>
    </div>
  );
};

function Works() {
  return (
    <section className="mb-12 py-11 font-nunito mx-6">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col">
          <h3>Work</h3>
          <h1 className="mt-0 w-[14rem]">Some of our Recent Works</h1>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 2xl:grid-cols-5 gap-6">
          <Work icon={CreativeDesign} title="Creative Design" param="UIdeck" />
          <Work icon={webdesign} title="Web Design" param="UIdeck" />
          <Work icon={CreativeDesign} title="Creative Design" param="UIdeck" />
          <Work icon={webdesign} title="Analysis" param="UIdeck" />
          {/* Conditionally show these items only for 2xl screens */}
          <div className="hidden 2xl:block">
            <Work icon={webdesign} title="SEO" param="UIdeck" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
