import CountUp from "react-countup";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

function Statystyki() {
  return (
    <motion.div
      className={`py-16 px-6 md:px-16 bg-neutral-800 text-white text-center rounded-4xl w-[90%] max-w-[880px] shadow-2xl mx-auto ${poppins.className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Dlaczego warto nam zaufać?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="text-5xl font-bold rounded-4xl bg-neutral-700 hover:bg-yellow-500 hover:text-neutral-800 px-7 py-4 w-72 text-center">
          <CountUp start={0} end={200} duration={6} />+
          <p className="text-lg md:text-xl font-light mt-2">Zadowolonych klientów</p>
        </div>
        <div className="text-5xl font-bold rounded-4xl bg-neutral-700 hover:bg-yellow-500 hover:text-neutral-800 px-10 py-4 w-72 text-center">
          <CountUp start={0} end={100} duration={6} />+
          <p className="text-lg md:text-xl font-light mt-2">Aut rocznie</p>
        </div>
        <div className="text-5xl font-bold rounded-4xl bg-neutral-700 hover:bg-yellow-500 hover:text-neutral-800 px-7 py-4 w-72 text-center">
          <CountUp start={0} end={5} duration={6} />+
          <p className="text-lg md:text-xl font-light mt-2">Lat doświadczenia</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Statystyki;
