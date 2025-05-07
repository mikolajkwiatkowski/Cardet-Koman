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
                        name="Toyota Corolla"
                        year="2024"
                        photos={["/cars/toyota/toyota.jpg", "/cars/toyota/toyota2.jpg", "/cars/toyota/toyota3.jpg"]}
                        description="Pełny detailing z powłoką ceramiczną i zabezpieczeniem wnętrza."
                        details={[
                            "Detailing karoserii",
                            "1-etapowa korekta lakieru",
                            "Powłoka ceramiczna",
                            "Zabezpieczenie felg i szyb"
                        ]}
                    />
                    <Footer></Footer>
                </div>

            </div>
        </>
    );
}
