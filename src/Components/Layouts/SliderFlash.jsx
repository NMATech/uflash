// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";
import Flashcard from "../Fragments/Flashcard";

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
          <Flashcard isFlip={isFlip} handleFlip={handleFlip} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
