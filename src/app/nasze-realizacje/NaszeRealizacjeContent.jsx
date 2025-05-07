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
      photo: "/cars/toyota/toyota.jpg",
      name: "Toyota",
      age: "2020",
      description: "Kompleksowy detailing z korektą lakieru i zabezpieczeniem ceramicznym.",
      link: "/nasze-realizacje/toyota-corolla"
    },
    {
      photo: "/cars/alfa-romeo-giulia/alfa-romeo-giulia.jpg",
      name: "Alfa Romeo",
      age: "2019",
      description: "3-etapowa korekta lakieru oraz detailing wnętrza. Zabezpieczenie ceramiki.",
      link: "/nasze-realizacje/alfa-romeo-giulia"
    },
    {
      photo: "/cars/brabus/brabus.jpg",
      name: "Mercedes Brabus",
      age: "2021",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedes-brabus-s"
    },
    {
      photo: "/cars/bmw-x4/bmw-x4.jpg",
      name: "BMW X4",
      age: "2020",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/bmw-x4"
    },
    {
      photo: "/cars/mercedesw140/mercedesw140.jpg",
      name: "Mercedes W140",
      age: "2000",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/mercedesw140"
    },
    {
      photo: "/cars/skoda-karoq/skoda-karoq.jpg",
      name: "Skoda Karoq",
      age: "2023",
      description: "Mycie detailingowe, woskowanie oraz pranie tapicerki.",
      link: "/nasze-realizacje/skoda-karoq"
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
