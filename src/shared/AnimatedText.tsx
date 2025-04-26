import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../lib/utils";
interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  highlight?: boolean;
}
const AnimatedText = ({
  text,
  className,
  once = true,
  delay = 0,
  highlight = false,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5, margin: "-50px" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cn(
            "md:mr-3 mr-2 leading-tight ",
            highlight && index % 3 === 0 ? "gradient-text font-bold" : ""
          )}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
