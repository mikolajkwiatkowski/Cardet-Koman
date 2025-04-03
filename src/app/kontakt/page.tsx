"use client";
import NavigationBar from '../NavigationBar.jsx'
import Footer from '../Footer.jsx'
import MainContent from '../MainContent.jsx'
import { useState } from "react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div className='flex flex-col min-h-screen bg-slate-700'>
    <div className="relative">
      <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer></Footer>
    </div>

      </div>
    </>
  );
}
