"use client"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
});

function NavigationBar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[4.2rem] flex flex-row bg-black items-center justify-between shadow-md z-50">

        {/* Left buttons (Hidden on small screens) */}
        <div className={`hidden md:flex flex-row justify-start space-x-24 pl-56 ${poppins.className} text-xl`}>
          <button className="hover"><a href="/uslugi">Usługi</a></button>
          <button className="hover"><a href="/nasze-realizacje">Galeria</a></button>
          <button className="hover"><a href="/o-nas">O nas</a></button>
        </div>

        {/* Centered Logo */}
        <div className={`flex-1 flex justify-center  items-center pr-3`}>
          <a href="/">
            <img src="/logo2.png" alt="Cardet-Koman Logo" className="h-auto max-h-[13rem] pt-9" />
          </a>
        </div>

        {/* Right buttons (Hidden on small screens) */}
        <div className="hidden md:flex flex-row items-center justify-between gap-10 pr-10 min-w-[450px]">
          {/* Grupa 3 przycisków */}
          <div className={`flex flex-row space-x-24 ${poppins.className} text-xl pr-10`}>
            <button className="hover"><a href="/kontakt">Kontakt</a></button>
            <button className="hover"><a href="/opinie">Opinie</a></button>
            <button className="hover"><a href="/faq">FAQ</a></button>
          </div>

          {/* Żółty przycisk przy prawej krawędzi */}
          <a
            href="/zgloszenie"
            className={`bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl shadow hover:bg-yellow-600 hover:scale-105 transition duration-300 ${poppins.className}`}
          >
            Napisz do nas
          </a>

        </div>



        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex ml-auto items-center justify-end mr-5">
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`w-full h-auto pt-10 bg-black text-white ${isMenuOpen ? "block" : "hidden"} mt-[4.2rem]`}>
        <div className={`flex flex-col items-center py-4 ${poppins.className}`}>
          <button className="py-2"><a href="/uslugi">Usługi</a></button>
          <button className="py-2"><a href="/nasze-realizacje">Galeria</a></button>
          <button className="py-2"><a href="/o-nas">O nas</a></button>
          <button className="py-2"><a href="/kontakt">Kontakt</a></button>
          <button className="py-2"><a href="/opinie">Opinie klientów</a></button>
          <button className="py-2"><a href="/faq">FAQ</a></button>
          <button className="py-2"><a href="/zgloszenie">Napisz do nas</a></button>
        </div>
      </div>

      {/* Żółta linia pod headerem */}
      <div className="w-full h-1 bg-yellow-500 fixed top-[4.2rem] left-0 z-40"></div>

      {/* Dodaj margines do treści strony, żeby nie była schowana pod nagłówkiem */}
      <div className="pt-[4.2rem]"></div>
    </>
  );
}

export default NavigationBar;
