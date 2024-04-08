"use client"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillsDataProvider = ({ src, height, index, width }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillsDataProvider;
