"use client";
import NavigationBar from '../../NavigationBar.jsx'
import Footer from '../../Footer.jsx'
import { useState } from "react";
import RealizacjaContent from "../RealizacjaContent.jsx"
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    return (
        <>
            <div className='flex flex-col min-h-screen bg-slate-700'>
                <div className="relative">
                    <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    <RealizacjaContent
                        name="Skoda Karoq"
                        year="2023"
                        photos={["/cars/skoda-karoq/skoda-karoq.jpg","/cars/skoda-karoq/skoda-karoq-2.jpg","/cars/skoda-karoq/skoda-karoq-3.jpg","/cars/skoda-karoq/skoda-karoq-4.jpg",]}
                        description="Renowacja klasy premium z naciskiem na perfekcyjny wygląd lakieru i ochronę detali."

                        details={[
                            "Dokładne mycie wstępne i dekontaminacja",
                            "2-etapowa korekta lakieru",
                            "Aplikacja powłoki ceramicznej 9H",
                            "Detailing wnętrza skórzanego",
                            "Zabezpieczenie elementów chromowanych"
                        ]}

                    />
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
}
