"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600'],
});
const geistmono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300'],
});

function RealizacjaContent({ name, year, photos, description, details }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleOpenModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="w-full flex justify-center bg-[url('/onasbg2.jpg')] py-12 px-4">
      <div className="w-full h-[900px] max-w-5xl bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden">
        <Carousel
          showThumbs={false}
          infiniteLoop
          showIndicators={true}
          interval={4000}
          showStatus={true}
          className="rounded-t-2xl"
        >
          {photos.map((src, index) => (
            <div key={index} onClick={() => handleOpenModal(src)}>
              <img src={src} alt={`Zdjęcie ${index + 1}`} className="object-cover h-[500px] w-full cursor-pointer" />
            </div>
          ))}
        </Carousel>

        <div className={`text-white p-8 ${poppins.className}`}>
          <h1 className="text-4xl font-bold mb-4">{name} ({year})</h1>
          <p className="text-xl mb-6">{description}</p>
          <ul className="list-disc list-inside text-base space-y-2">
            {details.map((item, index) => (
              <li key={index} className="text-yellow-400 text-xl">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={handleCloseModal}
          ></div>

          <div className="relative z-10 max-w-3xl w-full h-full flex justify-center items-center p-4">
            <img
              src={modalImage}
              alt="Powiększone zdjęcie"
              className="object-contain max-h-full max-w-full"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 font-bold text-black w-14 h-14 text-3xl bg-yellow-400 p-2 rounded-full mr-10 mt-5 hover:bg-black hover:text-yellow-400"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RealizacjaContent;
