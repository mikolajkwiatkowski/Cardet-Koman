import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const geistmono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300"],
});

function Footer() {
  const tiktokUrl = "https://www.tiktok.com/@cardet.koman";
  const facebookUrl = "https://www.facebook.com/CarDet.Koman";
  const instagramUrl = "https://www.instagram.com/cardet.koman/";
  const githubUrl = "https://github.com/mikolajkwiatkowski";

  return (
    <>
      <div className="w-full h-1 bg-yellow-500"></div>

      {/* Kontener footera */}
      <div className="w-full h-auto flex flex-col md:flex-row items-center bg-black py-6 md:py-10">
        {/* Sekcja Kontakt */}
        <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center py-5">
          <p
            className={`font-poppinsbold  text-3xl ${poppins.className}`}
          >
            Kontakt:
          </p>

          <div className="w-full flex flex-col items-center md:flex-row justify-center gap-10 pt-5 md:pt-10">
            <div className="flex items-center">
              <img src="../icons/phone.svg" className="w-12 h-12" alt="phone icon" />
              <p
                className={`font-poppinsmedium pl-5 text-xl ${poppins.className} hover:text-yellow-500`}
              >
                667 618 020
              </p>
            </div>

            <div className="flex items-center">
              <img src="../icons/mail.svg" className="w-12 h-12" alt="mail icon" />
              <p
                className={`font-poppinsmedium pl-5 text-xl ${poppins.className} hover:text-yellow-500`}
              >
                cardet-koman@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Sekcja Social Media */}
        <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center py-5">
          <p className={`font-poppinsbold text-3xl ${poppins.className}`}>
            Nasze social media:
          </p>

          <div className="w-full flex flex-row justify-center items-center gap-10 pt-5 md:pt-10">
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="../icons/tiktok.svg"
                className="w-16 h-16 hover:scale-125 transition-transform duration-300"
                alt="tiktok icon"
              />
            </a>

            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="../icons/facebook.svg"
                className="w-19 h-19 hover:scale-125 transition-transform duration-300"
                alt="facebook icon"
              />
            </a>

            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="../icons/instagram.svg"
                className="w-16 h-16 hover:scale-125 transition-transform duration-300"
                alt="insta icon"
              />
            </a>
          </div>
        </div>

        {/* Sekcja Akredytowanego Studia */}
        <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center py-5">
          <p className={`font-poppinsbold text-3xl ${poppins.className}`}>
            Akredytowane studio 
          </p>

          <div className="w-full flex justify-center items-center pt-5 md:pt-10">
            <a href="https://fxprotect.com/pl/">
            <img
              src="/fxproject.png"
              className="w-52 h-auto hover:scale-110 transition-transform duration-300"
              alt="Akredytowane studio logo"
            />
            </a>
          </div>
        </div>
      </div>

      {/* Made by Mikołaj Kwiatkowski */}
      <div className="w-full flex flex-row items-center bg-black py-4 justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <p className={`text-white text-m font-bold ${geistmono.className}`}>
            Made by students group from Politechnika Bydgoska
          </p>

          <img
            src="../icons/github.svg"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            alt="GitHub icon"
          />
        </a>
      </div>
    </>
  );
}

export default Footer;
