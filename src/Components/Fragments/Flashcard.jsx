import { motion } from "framer-motion";
import { CardQuestion } from "../Elements/Flashcard/CardQuestion";
import { CardAnswer } from "../Elements/Flashcard/CardAnswer";

const Flashcard = ({ isFlip, handleFlip }) => {
  return (
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
  );
};

export default Flashcard;
