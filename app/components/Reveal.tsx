"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** stagger amount — multiplied by index for grouped reveals */
  index?: number;
};

export default function Reveal({ children, className, delay = 0, y = 18, index = 0 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{
        duration: 0.85,
        delay: delay + index * 0.06,
        ease: [0.2, 0.6, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
