import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
})
function Footer() {
    const tiktokUrl = 'https://www.tiktok.com/@cardet.koman';
    const facebookUrl = 'https://www.facebook.com/CarDet.Koman';
    const instagramUrl = 'https://www.instagram.com/cardet.koman/';
 
   return (
     <>
       <div className='w-full h-1 bg-yellow-500'></div>
       
       {/* Kontener footera */}
       <div className="w-full h-auto flex flex-col md:flex-row items-center bg-black">
 
         {/* Sekcja Kontakt */}
         <div className='w-full md:w-1/2 h-full flex flex-col items-center py-5'>
           <p className={`font-poppinsbold text-3xl font-extralight ${poppins.className}`}>Kontakt:</p>
           
           <div className='w-full flex flex-row items-center pt-5 pl-24 md:pt-10'>
             <img src="/phone.svg" className='w-12 h-12 ml-10 md:ml-32' alt="phone icon"></img>
             <p className={`font-poppinsmedium pl-5 text-xl ${poppins.className}`}>667 618 020</p>
             <img src="/mail.svg" className='w-12 h-12 ml-10 md:ml-32' alt="mail icon"></img>
             <p className={`font-poppinsmedium pl-5 text-xl ${poppins.className}`}>cardet-koman@gmail.com</p>
           </div>
           
           
         </div>
 
        
 
         {/* Sekcja Social Media */}
         <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center  py-5'>
           <p className={`font-poppinsbold text-3xl  pl-14 ${poppins.className}`}>Nasze social media:</p>
           
           <div className='w-full flex flex-row justify-center items-center pt-5 md:pt-10 space-x-24 px-16 pl-24'>
             <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
                 <img src="/tiktok.svg" className='w-16 h-16 ' alt="tiktok icon" />
             </a>
             
             <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                 <img src="/facebook.svg" className='w-16 h-16' alt="facebook icon" />
             </a>
             <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                 <img src="/instagram.svg" className='w-16 h-16' alt="insta icon" />
             </a>
           </div>
              
         </div>
       </div>
     </>
   );
 }
 
 export default Footer;
 