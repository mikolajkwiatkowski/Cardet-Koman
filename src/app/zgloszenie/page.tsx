"use client";
import NavigationBar from '../NavigationBar.jsx'
import Footer from '../Footer.jsx'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "600"],
});
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [status, setStatus] = useState("");
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(  //wysłanie formularza
                "service_0j14y0o", // ID serwisu ze strony
                "template_0zud9mb", // ID szablonu ze strony
                form.current, //wybór formularza
                "eL0wiU9DKJH_3fVuS" // ID publicznego klucza ze strony
            )
            .then(
                () => {
                    setStatus("Wiadomość została wysłana!");
                    form.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("Wystąpił błąd podczas wysyłania wiadomości.");
                }
            );
    };

    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-700 text-white pt-10 bg-[url('/kontaktbg.jpg')]">
                <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                <main className={` flex-grow p-6 flex flex-col items-center ${poppins.className} `}>
                    <h1 className="text-3xl font-bold mb-4 text-neutral-800">Formularz kontaktowy</h1>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="w-full max-w-md space-y-4 bg-neutral-800 p-6 rounded-4xl shadow-md"
                        >
                        <input
                            type="text"
                            name="title"
                            placeholder="Temat wiadomości"
                            required
                            className="w-full p-2 rounded text-white font-bold "
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Imię i nazwisko"
                            required
                            className="w-full p-2 rounded text-white font-bold "
                        />
                        <textarea
                            name="message"
                            placeholder="Wiadomość"
                            required
                            className="w-full p-2 rounded text-white font-bold h-32"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-neutral-800 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 text-xl font-bold p-2 rounded-4xl"
                        >
                            Wyślij
                        </button>
                        {status && <p className="text-center mt-2">{status}</p>}
                    </form>
                </main>

                <Footer />
            </div>
        </>
    );
}