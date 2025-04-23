"use client"
import { Poppins } from "next/font/google";
import React from 'react';
import Kafelek from './../Kafelek.jsx';
import KafelekKontakt from './KafelekKontakt.jsx';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '600', '700']
});

function KontaktContent({ isMenuOpen }) {
    const tiktokUrl = "https://www.tiktok.com/@cardet.koman";
    const facebookUrl = "https://www.facebook.com/CarDet.Koman";
    const instagramUrl = "https://www.instagram.com/cardet.koman/";
    const githubUrl = "https://github.com/mikolajkwiatkowski";

    return (
        <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? "translate-y-[-70px]" : ""} bg-[url('/kontaktbg.jpg')]`}>

            <div className="pt-10 pb-10 flex flex-wrap justify-center gap-6">
                <KafelekKontakt width="400px" height="700px" animated={false}>
                    <div className="flex flex-col justify-center text-white gap-4 w-full h-full">
                        <div className="text-6xl font-extrabold mb-6">Kontakt:</div>

                        <div className="flex flex-col gap-1">
                            <div className="text-4xl font-semibold">Damian</div>
                            <div className="text-2xl font-medium">000 000 000</div>
                        </div>

                        <div className="flex flex-col gap-1 mt-6">
                            <div className="text-4xl font-semibold">Bartek</div>
                            <div className="text-2xl font-medium">723 852 202</div>
                        </div>
                        <div className="text-5xl font-extrabold  mt-6">Adres:</div>

                        <div className="flex flex-col gap-1 ">
                            <div className="text-3xl font-semibold">Karnowo 37, 89-100 Karnowo</div>
                        </div>
                        <div className="w-full flex flex-row justify-center items-center gap-10 pt-8 md:pt-8  ">
                            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src="../icons/tiktok.svg"
                                    className="w-20 h-20 hover:scale-125 transition-transform duration-300"
                                    alt="tiktok icon"
                                />
                            </a>

                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src="../icons/facebook.svg"
                                    className="w-24 h-24 hover:scale-125 transition-transform duration-300"
                                    alt="facebook icon"
                                />
                            </a>

                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src="../icons/instagram.svg"
                                    className="w-20 h-20 hover:scale-125 transition-transform duration-300"
                                    alt="insta icon"
                                />
                            </a>
                        </div>
                    </div>
                </KafelekKontakt>

                <KafelekKontakt width="700px" height="700px" animated={false}>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.5842404876353!2d17.606439577189114!3d53.171498772239154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703a1c42d8de7f7%3A0xab927b8ef483017a!2sCarDet.Koman%20Auto%20Detailing%20Nak%C5%82o!5e0!3m2!1spl!2spl!4v1743866756172!5m2!1spl!2spl" width="100%"
                        height="620px"
                        style={{ border: 0, borderRadius: "1rem" }}
                        
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </KafelekKontakt>
            </div>
        </div>
    );
}

export default KontaktContent;
