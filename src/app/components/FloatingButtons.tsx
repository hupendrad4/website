// components/BackgroundDots.js
"use client";
import { motion } from "framer-motion";

export default function BackgroundDots() {
  const dots = [
    { left: "27.12%", top: "90.57%" },
    { left: "64.77%", top: "76.23%" },
    { left: "98.90%", top: "85.50%" },
    { left: "33.09%", top: "78.66%" },
    { left: "63.70%", top: "20.33%" },
    { left: "19.48%", top: "28.97%" },
    { left: "55.40%", top: "37.95%" },
    { left: "77.41%", top: "93.05%" },
    { left: "17.86%", top: "56.55%" },
    { left: "82.53%", top: "16.40%" },
    { left: "83.23%", top: "4.44%" },
    { left: "7.59%", top: "8.44%" },
    { left: "43.09%", top: "75.26%" },
    { left: "9.65%", top: "96.28%" },
    { left: "1.09%", top: "78.99%" },
    { left: "4.96%", top: "47.86%" },
    { left: "69.31%", top: "89.63%" },
    { left: "49.49%", top: "57.96%" },
    { left: "13.25%", top: "7.92%" },
    { left: "92.85%", top: "12.59%" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none z-10">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-500"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0, 10, 0] }}
          transition={{
            duration: 3 + (i % 5), // vary for natural feel
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2, // each dot starts at a slightly different time
          }}
        />
      ))}
    </div>
  );
}
