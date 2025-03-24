import Image from "next/image";
import NavigationBar from './NavigationBar.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'

export default function Home() {
  return (
    <>
    <div className='flex flex-col min-h-screen bg-slate-700'>
       <NavigationBar/>
        <MainContent/>
       <Footer/>

      </div>
    </>
  );
}
