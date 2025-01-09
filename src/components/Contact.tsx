import Image from "next/image";
import React from "react";
import ContactImg from "../../public/images/contact.png";
import { ZoomIn, AnimationLeft, AnimationRight } from "./AnimationWrapper";

function Contact() {
  return (
    <section className="font-nunito py-12" id="contact">
      <div className="flex justify-center items-center gap-2 ">
        <AnimationRight delay={1}>
          <div className="flex">
            <Image src={ContactImg} alt="contact" />
          </div>
        </AnimationRight>
        <AnimationLeft delay={1}>
          <div className="">
            <div className="flex flex-col space-y-2">
              <h2 className="text-[#F94F4F] font-bold">Contact</h2>
              <h1 className="text-[2rem] font-bold">Get In Touch</h1>
              <p className="w-[40rem] h-[3rem] text-gray-500">
                Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna.
              </p>
            </div>
            <div className="flex mt-8 space-x-4">
              <input
                className="w-[18rem] h-[3rem] border-gray-300 border-2 rounded-md px-4"
                placeholder="Name"
              ></input>

              <input
                className="w-[18rem] h-[3rem] border-gray-300 border-2 rounded-md px-4"
                placeholder="Name"
              ></input>
            </div>
            <div className="mt-6">
              <input
                className="w-[37rem] h-[9rem] border-gray-300 border-2 rounded-md text-start px-4"
                placeholder="Message"
              ></input>
            </div>
            <div className="mt-6">
              <button className="w-[8rem] h-[3rem] border-2 border-gray-300 rounded-xl text-white bg-[#F94F4F]">
                Submit
              </button>
            </div>
          </div>
        </AnimationLeft>
      </div>
    </section>
  );
}

export default Contact;
