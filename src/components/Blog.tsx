import React from "react";
import Blog1 from "../../public/images/blog-1.png";
import Blog2 from "../../public/images/blog-2.png";
import Blog3 from "../../public/images/blog-3.png";

interface BlogCard {
  icon: StaticImageData;
  title: string;
}

const Blogs: React.FC<BlogCard> = ({ icon, title }) => {
  return (
    <div className="h-[29rem] w-[25rem] shadow-md rounded-xl ">
      <Image src={icon} alt="blog1" className="h-[19rem]" />
      <div className="flex justify-between mx-3 mt-2 text-gray-500">
        <h3>By:Musharof Chowdury</h3>
        <h3>15 June 2024</h3>
      </div>
      <div className="flex flex-col mt-3 space-y-3 mx-3">
        <h1 className="text-[1.5rem] w-[20rem] font-bold">{title}</h1>
        <p className="text-gray-500">Read More</p>
      </div>
    </div>
  );
};

import Image, { StaticImageData } from "next/image";
function Blog() {
  return (
    <section className="my-12 font-nunito" id="blogs">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col space-y-2">
          <h3 className="text-[#F94F4F]">Blog</h3>
          <h1 className="font-bold text-[1.7rem] w-[8rem]">From The Blog</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-3">
            <Blogs
              icon={Blog1}
              title="How to track your business
                 revenue"
            />

            <Blogs
              icon={Blog1}
              title="Improving products depending
                 on feedback"
            />

            <Blogs icon={Blog1} title="How to diversify your audience" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
