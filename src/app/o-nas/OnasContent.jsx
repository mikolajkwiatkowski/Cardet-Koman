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
        <KafelekPracownik 
  pfp="zdj2.jpg" 
  name="Kacper Zawada" 
  description="Mistrz polerki i niekwestionowany król mikrofibry. Jego ulubione hasło: 'Każda rysa ma swojego pana.'" 
  width="500px" 
  height="600px" 
/>

<KafelekPracownik 
  pfp="zdj3.jpg" 
  name="Mateusz Płatek" 
  description="Detailingowy perfekcjonista. Jeśli znajdziesz pyłek po jego robocie — masz gratis usługę (spoiler: nie znajdziesz)." 
  width="500px" 
  height="600px" 
/>

<KafelekPracownik 
  pfp="zdj1.jpg" 
  name="Aleksandra Czystość" 
  description="Specjalistka od wnętrz — odplami nawet Twoją przeszłość. Mistrzyni w pielęgnacji tapicerki i zapachu 'nowego auta'." 
  width="500px" 
  height="600px" 
/></div>
      </div>
    </>
  );
}

export default OnasContent;
