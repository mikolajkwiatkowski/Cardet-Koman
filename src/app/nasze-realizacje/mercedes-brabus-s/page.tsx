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
                        name="Mercedes-Benz Brabus S"
                        year="2024"
                        photos={["/cars/brabus.jpg", "/cars/brabus2.jpg", "/cars/brabus3.jpg"]}
                        description="Efekt lustra i maksymalna głębia koloru — idealny wygląd na zlot lub wystawę."

                        details={[
                            "Showcar wash z pianą aktywną",
                            "3-etapowa korekta z pastami Menzerna",
                            "Ceramiczna ochrona lakieru i felg",
                            "Zabezpieczenie szyb powłoką hydrofobową",
                            "Detailing wnętrza i strefy silnika"
                        ]}

                    />
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
}
