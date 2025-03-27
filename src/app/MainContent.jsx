"use client"
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '600']
})
const geistmono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300']
})
function MainContent({ isMenuOpen }) {
  return (
    <>
      <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? "translate-y-[-70px]" : ""}`}>
        <video src="/bg_video2.mp4" muted loop autoPlay className="w-full h-[870px] object-cover"></video>

        {/* Treść na wideo */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col   text-white ">

          <div className={`text-7xl  font-bold ml-24 pt-44 ${poppins.className}`}>
            Zajmiemy się twoim autem!
          </div>


          <div className={`text-2xl font-light ml-24 pt-14  ${poppins.className} `}>
            Nasza firma to lider auto detailingu w okolicy, oferujący najwyższą jakość usług.<br /> Dzięki doświadczeniu i pasji sprawiamy, że Twój samochód wygląda jak nowy.
            <br />Zapoznaj się z naszą ofertą i powierz swoje auto profesjonalistom!
          </div>
          <div className={`${geistmono.className} text-5xl  ml-24 pt-10 `}>
            <TypeAnimation
              sequence={[
                'Sprzątamy auta',
                1250,
                'Polerujemy lakier',
                1250,
                'Naklejamy folie',
                1250,
                'Upalamy gruzy',
                1250
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center md:justify-end md:mr-40">
            <button className={`bg-yellow-500 font-bold w-48 h-16 rounded-4xl text-xl text-black mt-24 md:mt-24 lg:mt-24 xl:mt-56 2xl:mt-56 ${poppins.className}`}>
              <a href="#">Sprawdź ofertę</a>
            </button>
          </div>


        </div>


        <div>
          no elo
        </div>

      </div>
    </>
  );
}

export default MainContent;
