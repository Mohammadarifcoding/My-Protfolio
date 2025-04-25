import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/src/lib/utils';
interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
  }
const AnimatedSection = ({
    children,
    className,
    id,
    delay = 0,
    direction = "up",
  }: AnimatedSectionProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2, margin: "-100px" })
  
    const getDirectionVariants = () => {
      switch (direction) {
        case "up":
          return {
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }
        case "down":
          return {
            hidden: { y: -40, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }
        case "left":
          return {
            hidden: { x: 40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }
        case "right":
          return {
            hidden: { x: -40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }
        case "none":
          return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }
      }
    }


    return (
        <motion.section
        ref={ref}
        id={id}
        className={cn(className)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getDirectionVariants()}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.section>
    );
};

export default AnimatedSection;