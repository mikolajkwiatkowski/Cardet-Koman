import React from 'react'
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
})

function KafelekPracownik({ pfp, name, description, width, height }) {
  return (
    <motion.div
      className={`flex flex-col bg-neutral-800 hover:bg-yellow-500 border-3  shadow-2xl border-yellow-500  hover:text-neutral-800 rounded-4xl drop-shadow-xl items-center p-6 transition-transform duration-300 hover:scale-105 ${poppins.className}`}
      style={{ width, height }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
        <div><img src={pfp} className="w-24 h-24 rounded-full object-cover  "></img></div>
      <h1 className="font-bold text-3xl pt-4 text-center">{name}</h1>
      <div className="font-medium text-3xl pt-4 text-left w-full">{description}</div>
    </motion.div>
  )
}

export default KafelekPracownik;
