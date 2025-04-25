'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 50)
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    return (
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrollYProgress,
          opacity: isVisible ? 1 : 0,
          height: isVisible ? "3px" : "0px",
        }}
      />
    )
};

export default ScrollProgress;