import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

function KafelekKontakt({
  title,
  description,
  width = "400px",
  height = "400px",
  children,
}) {
  return (
    <div
      style={{ width, height }}
      className={`flex flex-col rounded-4xl drop-shadow-xl items-center p-6 bg-neutral-800 text-white ${poppins.className}`}
    >
      {title && <h1 className="font-bold text-3xl pt-4 text-center">{title}</h1>}
      {description && (
        <div className="font-medium text-xl pt-4 text-left w-full">
          {description}
        </div>
      )}
      {children && <div className="w-full pt-4">{children}</div>}
    </div>
  );
}

export default KafelekKontakt;
