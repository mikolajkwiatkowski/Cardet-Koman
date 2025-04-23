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
                        name="Alfa Romeo Giulica Veloce"
                        year="2021"
                        photos={["/cars/alfa-romeo-giulia.jpg", "/cars/alfa-romeo-giulia2.jpg"]}
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
