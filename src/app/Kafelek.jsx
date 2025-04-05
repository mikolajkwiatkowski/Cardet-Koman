import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
});

function Kafelek({ title, description, width = "400px", height = "400px", animated = true }) {
  const Wrapper = animated ? motion.div : 'div';

  const commonStyles = `
    flex flex-col rounded-4xl drop-shadow-xl items-center p-6
    ${poppins.className}
    bg-neutral-800 text-white
  `;

  const animatedStyles = `
    hover:bg-yellow-500 hover:text-neutral-800 
    transition-transform duration-300 hover:scale-105
  `;

  return (
    <Wrapper
      style={{ width, height }}
      className={`${commonStyles} ${animated ? animatedStyles : ''}`}
      {...(animated && {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        whileHover: { scale: 1.05 }
      })}
    >
      <h1 className="font-bold text-3xl pt-4 text-center">{title}</h1>
      <div className="font-medium text-xl pt-4 text-left w-full">{description}</div>
    </Wrapper>
  );
}

export default Kafelek;
