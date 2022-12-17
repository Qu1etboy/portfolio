import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opcaity: 0, x: 0, y: 100 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 1, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
};

export const SlideDown = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) => {
  const variants = {
    hidden: { y: -500 },
    enter: { y: 0 },
    exit: { y: -500 },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "absolute", width: "100%", zIndex: 10 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
