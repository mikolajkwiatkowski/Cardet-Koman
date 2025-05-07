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
            title: "Ile trwa pełny detailing auta?",
            content:
              "W zależności od zakresu usługi, pełny detailing może trwać od jednego do trzech dni. Dokładny czas zależy od stanu pojazdu oraz wybranego pakietu."
          },
          {
            title: "Czy można zostawić auto na noc?",
            content:
              "Tak, dysponujemy bezpiecznym, monitorowanym miejscem, gdzie samochód może zostać na czas realizacji usługi."
          },
          
          {
            title: "Czy detailing usuwa rysy?",
            content:
              "Detailing lakieru obejmuje korektę, która może usunąć lub znacznie zredukować większość mikrorys i hologramów. Głębsze rysy mogą wymagać lakierowania."
          },
          {
            title: "Czy detailing obejmuje wnętrze?",
            content:
              "Tak! Wnętrze to ważny element usługi. Oferujemy kompleksowe czyszczenie, pranie tapicerki, pielęgnację skóry oraz zabezpieczenie plastików."
          },
          {
            title: "Jak się przygotować przed oddaniem auta?",
            content:
              "Nie musisz specjalnie przygotowywać auta. Jeśli masz cenne przedmioty – warto je zabrać, a my zajmiemy się resztą."
          },
          
        ]
      };
      
    
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
            <div className={`w-full max-w-7xl h-[550px] p-6 mt-20 mb-20 rounded-4xl bg-neutral-800 text-white shadow-xl font-bold ${poppins.className}`}>
                {/* Komponent FAQ z niestandardowym tłem */}
                <Faq 
                    data={data}
                    styles={styles}
                />      </div>
        </div>
    )
}

export default FaqContent;
