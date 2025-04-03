"use client"
import { Poppins } from "next/font/google";
const api_key = 'https://1b36d249e9f1407b8d818b4dd72c4d30.elf.site'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '600']
});

function OpinieContent({ isMenuOpen }) {
    return (
        <>
            <div className={`w-full flex-grow bg-neutral-900 transition-transform duration-300 bg-[url('/onasbg2.jpg')] bg-cover bg-center ${isMenuOpen ? "translate-y-[-70px]" : ""}`}>
                <div className="">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js"></script>
                {/* <iframe onload="iFrameResize(this)" src="https://1b36d249e9f1407b8d818b4dd72c4d30.elf.site" className="w-full h-[1000px] pt-20"></iframe> */}
                </div>

            </div>
        </>
    );
}

export default OpinieContent;
