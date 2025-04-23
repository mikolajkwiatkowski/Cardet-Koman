import React from 'react'
import Link from 'next/link'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
})

function KafelekAuto({ photo, name, age, description, link }) {
  return (
    <Link href={link} className="no-underline">
      <div
        className={`flex flex-col bg-neutral-800 hover:bg-yellow-500 shadow-2xl border-yellow-500  
        hover:text-neutral-800 rounded-2xl overflow-hidden drop-shadow-xl transition-transform duration-300 
        hover:scale-105 w-full max-w-md cursor-pointer ${poppins.className}`}
      >
        {/* Zdjęcie auta */}
        <div className="w-full h-64 overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Informacje o aucie */}
        <div className="flex flex-col items-start p-6 text-white hover:text-neutral-800 transition-colors duration-300">
          <h1 className="font-bold text-2xl mb-2">{name}</h1>
          <p className="text-lg mb-1">Rocznik: {age}</p>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default KafelekAuto;
