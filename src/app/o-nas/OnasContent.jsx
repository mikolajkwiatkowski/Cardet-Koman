"use client"
import { Poppins } from "next/font/google";
import KafelekPracownik from './KafelekPracownik.jsx';
import Kafelek from './../Kafelek.jsx';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '600']
});

function OnasContent({ isMenuOpen }) {
  return (
    <>
      <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 bg-[url('/onasbg2.jpg')] bg-cover bg-center ${isMenuOpen ? "translate-y-[-70px]" : ""}`}>
        
        {/* Wyśrodkowany nagłówek z podpisem */}
        <div className="flex flex-col justify-center items-center text-white py-10">
          <h1 className={`text-6xl font-bold ${poppins.className}`}>Nasz zespół</h1>
          <p className={`text-2xl mt-2 ${poppins.className}`}>Profesjonaliści gotowi do działania</p>
        </div>

        {/* Wyśrodkowany kafelek "O nas" */}
       

        {/* Kafelki pracowników */}
        <div className=" pb-10 flex flex-wrap justify-center gap-6 ">
          <KafelekPracownik pfp="zdj2.jpg" name="Bartosz Korthals" description="Nowy nabytek w firmie, słynny w całej gminie ze swoich włosów na Ronaldo. Ostry jebaka, a to jeden z jego wielu ukrytych talentów." width="500px" height="600px" />
          <KafelekPracownik pfp="zdj2.jpg" name="Damian Kosmatka" description="Doświadczony diagnosta i mechanik" width="500px" height="600px" />
          <KafelekPracownik pfp="zdj2.jpg" name="Bartosz Korthals" description="Doświadczony diagnosta i mechanik" width="500px" height="600px" />
        </div>
      </div>
    </>
  );
}

export default OnasContent;
