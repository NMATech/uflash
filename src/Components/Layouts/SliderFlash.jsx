// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Navigation } from "swiper/modules";
import { CardQuestion } from "../Elements/Flashcard/CardQuestion";
import { useState } from "react";
import { CardAnswer } from "../Elements/Flashcard/CardAnswer";
import { motion } from "framer-motion";

export const SliderFlash = () => {
  const [isFlip, setIsFlip] = useState(false);
  const style = {
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
  };

  const handleFlip = () => setIsFlip(!isFlip);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center text-center">
          <motion.div
            className="relative w-[250px] h-[300px] cursor-pointer"
            initial={false}
            animate={{ rotateY: isFlip ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Question Card */}
            <CardQuestion
              handleFlip={handleFlip}
              isFlip={isFlip}
              className={`absolute w-full h-full backface-hidden`}
            />

            {/* Answer Card */}
            <CardAnswer
              handleFlip={handleFlip}
              isFlip={isFlip}
              className={`absolute w-full h-full backface-hidden`}
              style={{
                transform: "rotateY(180deg)", // Kartu answer perlu dirotasi 180 derajat
              }}
            />
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
