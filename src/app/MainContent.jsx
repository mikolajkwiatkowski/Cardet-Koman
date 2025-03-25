"use client"
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
})
const geistmono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300']
})
function MainContent() {
  return (
    <>
      <div className="w-full flex-grow bg-neutral-900  ">

        <video src="/bg_video2.mp4" muted loop autoPlay className="w-full h-fit"></video>

        {/* Treść na wideo */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  justify-center text-white ">

          <div className={`text-7xl font-bold ml-24 mb-10 ${poppins.className}`}>
            Zajmiemy się twoim autem!
          </div>

          <div className={`${geistmono.className} text-5xl ml-24 mb-64`}>
            <TypeAnimation
              sequence={[
                'Sprzątamy auta',
                1000,
                'Polerujemy lakier',
                1000,
                'Naklejamy folie',
                1000,
                'Upalamy gruzy',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-end mr-40 mt-20">
            <button  className={` bg-yellow-500 font-bold w-48 h-16 rounded-4xl text-xl text-black ${poppins.className}`}>
              <a href="#">Sprawdź ofertę</a>
            </button>
          </div>

        </div>

      </div>
    </>
  );
}

export default MainContent;
