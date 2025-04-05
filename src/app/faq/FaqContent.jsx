import React from 'react'
import Faq from "react-faq-component";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
});
function FaqContent({ isMenuOpen }) {
    const data = {
        title: "FAQ - Najczęściej zadawane pytania",
        rows: [
            {
                title: "Czy Pan Bartosz jest wolny?",
                content: "Tak, ale lubuje się tylko w choposzkach "
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
            },
            {
                title: "What is the package version",
                content: "v1.0.5"
            }]
    }
    const styles = {
        bgColor: 'neutral',
        titleTextColor: "white",
        rowTitleColor: "#efb100",
        rowContentColor: 'white',
        arrowColor: "#efb100",
    };

    const config = {
        arrowIcon: "V",
    };
    return (
        <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 ${isMenuOpen ? "translate-y-[-70px]" : ""} bg-[url('/kontaktbg.jpg')] flex justify-center items-center`}>
            {/* Kafelek z FAQ, prawie na całą stronę */}
            <div className={`w-full max-w-7xl h-[500px] p-6 mt-20 mb-20 rounded-4xl bg-neutral-800 text-white shadow-xl font-bold ${poppins.className}`}>
                {/* Komponent FAQ z niestandardowym tłem */}
                <Faq 
                    data={data}
                    styles={styles}
                />      </div>
        </div>
    )
}

export default FaqContent;
