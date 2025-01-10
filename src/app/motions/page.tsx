import React from "react";
import * as motion from "motion/react-client";
import { AnimationTop } from "@/components/AnimationWrapper";

function Motion() {
  return (
    <section className="justify-center flex items-center my-12">
      <AnimationTop delay={2}>
        <h1>Hello World</h1>
      </AnimationTop>
      <motion.div
        transition={{ delay: 2, duration: 1 }}
        className="border-2 border-red-500 w-[20rem] h-[20rem]"
        animate={{ x: -230 }}
      ></motion.div>

      <motion.div
        layout
        style={{ justifyContent: true ? "flex-start" : "flex-end" }}
        className="w-[20rem] h-[10rem] border-2 border-red-400"
      ></motion.div>
    </section>
  );
}

export default Motion;
