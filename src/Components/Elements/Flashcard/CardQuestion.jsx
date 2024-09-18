import { MdFlipCameraAndroid } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

export const CardQuestion = ({ handleFlip, isFlip }) => {
  return (
    <motion.section
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(0deg)",
      }}
      className="absolute h-[300px] w-[250px] bg-blue-400 flex flex-col justify-between rounded-2xl p-3"
    >
      <section className="bg-white h-[220px] flex justify-center items-center rounded-tl-2xl rounded-tr-2xl">
        <h1 className="text-2xl font-bold">QUESTION</h1>
      </section>
      <section className="flex justify-center items-center pb-2">
        <button onClick={handleFlip}>
          <MdFlipCameraAndroid className="text-[30px]" />
        </button>
      </section>
    </motion.section>
  );
};
