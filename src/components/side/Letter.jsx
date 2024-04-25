"use client";
import React from "react";
import { motion } from "framer-motion";
function Letter({ letters }) {
  return (
    <div>
      {letters.split("").map((letter, i) => (
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, ease: "linear" }}
          className={letter != "\n" ? "inline-block mr-0.5" : "inline"}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default Letter;
