"use client"
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import KafelekAuto from "./KafelekAuto.jsx";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '600']
})
const geistmono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300']
})
function NaszeRealizacjeContent({ isMenuOpen }) {
  const auta = [
    {
      photo: "/cars/toyota.jpg",
      name: "Toyota",
      age: "2020",
      description: "Kompleksowy detailing z korektą lakieru i zabezpieczeniem ceramicznym.",
      link: "/nasze-realizacje/toyota-corolla"
    },
    {
      photo: "/cars/alfa-romeo-giulia.jpg",
      name: "Alfa Romeo",
      age: "2019",
      description: "3-etapowa korekta lakieru oraz detailing wnętrza.",
      link: "/nasze-realizacje/alfa-romeo-giulia"
    },
    {
      photo: "/cars/brabus.jpg",
      name: "Mercedes Brabus",
      age: "2021",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedes-brabus-s"
    },
    {
      photo: "/cars/brabus.jpg",
      name: "Mercedes Brabus",
      age: "2021",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedes-brabus-s"
    },
    {
      photo: "/cars/brabus.jpg",
      name: "Mercedes Brabus",
      age: "2021",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedes-brabus-s"
    },
    {
      photo: "/cars/brabus.jpg",
      name: "Mercedes Brabus",
      age: "2021",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedes-brabus-s"
    },
    
  ];
  

  return (
    <>
      <div className="w-full flex justify-center bg-[url('/onasbg2.jpg')] py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {auta.map((auto, index) => (
     <KafelekAuto
     key={index}
     photo={auto.photo}
     name={auto.name}
     age={auto.age}
     description={auto.description}
     link={auto.link}
   />
   
    ))}
  </div>
</div>

    </>
  );
}

export default NaszeRealizacjeContent;
