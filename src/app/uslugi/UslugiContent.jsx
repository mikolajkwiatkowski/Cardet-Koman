    "use client"
    import { Poppins } from "next/font/google";
    import React from 'react';
    import { FaCarAlt, FaPumpSoap, FaPaintRoller, FaShower, FaWind, FaFeather } from "react-icons/fa";

    const poppins = Poppins({
        subsets: ['latin'],
        weight: ['300', '600', '700']
    });

    const uslugi = [
        { icon: <FaPumpSoap size={50} />, title: "Mycie Detailingowe", desc: "Dokładne mycie nadwozia z dbałością o każdy detal." },
        { icon: <FaPaintRoller size={50} />, title: "Korekta Lakieru", desc: "Usuwanie zarysowań i przywracanie głębi koloru." },
        { icon: <FaCarAlt size={50} />, title: "Powłoki Ceramiczne", desc: "Długotrwała ochrona lakieru i niesamowity połysk." },
        { icon: <FaFeather size={50} />, title: "Czyszczenie Wnętrza", desc: "Kompleksowe pranie tapicerki i detale wnętrza." },
        { icon: <FaWind size={50} />, title: "Przyciemnianie Szyb", desc: "Estetyka, prywatność i ochrona przed promieniami UV." },
        { icon: <FaShower size={50} />, title: "Regeneracja Felg", desc: "Czyszczenie, malowanie i zabezpieczanie felg." }
    ];

    function UslugiContent({ isMenuOpen }) {
        return (
            <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? "translate-y-[-70px]" : ""} bg-[url('/kontaktbg.jpg')] bg-cover bg-center py-20 px-4`}>
                <div className="max-w-6xl mx-auto text-white text-center">
                    <h2 className={`text-6xl font-bold mb-12 ${poppins.className} `}>Nasze usługi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
                        {uslugi.map((item, index) => (
                            <div key={index} className=" hover:scale-125 group flex flex-col items-center text-center bg-neutral-800 p-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 w-64 h-64 mx-auto pt-14">
                            <div className="text-yellow-400 mb-4 group-hover:text-neutral-900">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-neutral-900">{item.title}</h3>
                            <p className="text-sm text-neutral-300 group-hover:text-neutral-900">{item.desc}</p>
                          </div>
                          
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default UslugiContent;
