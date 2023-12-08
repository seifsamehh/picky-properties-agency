"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.section className="relative z-50">
        <motion.div
          className="slide-out"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="slide-out-2"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="slide-out-3"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
