import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600']
})
function Kafelek({ title, description }) {
  return (
    <motion.div
      className={`flex flex-col w-[400px] h-[300px] bg-neutral-800 hover:bg-yellow-500 hover:text-neutral-800 rounded-4xl drop-shadow-xl items-center p-6 transition-transform duration-300 hover:scale-105 ${poppins.className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h1 className="font-bold text-3xl pt-4 text-center">{title}</h1>
      <div className="font-medium text-xl pt-4 text-left w-full">{description}</div>
    </motion.div>
  );
}

export default Kafelek;
