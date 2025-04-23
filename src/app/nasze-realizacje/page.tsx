"use client";
import NavigationBar from '../NavigationBar.jsx'
import NaszeRealizacjeContent from './NaszeRealizacjeContent.jsx'
import Footer from '../Footer.jsx'
import { useState } from "react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  
  return (
    <>
    <div className='flex flex-col min-h-screen bg-slate-700'>
    <div className="relative">
      <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NaszeRealizacjeContent isMenuOpen={isMenuOpen} />

      <Footer></Footer>
    </div>

      </div>
    </>
  );
}
