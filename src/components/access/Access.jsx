import React from "react";
import { FaStethoscope, FaDog, FaHeart } from "react-icons/fa"; // Usar react-icons/fa en lugar de react-icons/fa6
import { BsScissors } from "react-icons/bs";
import { GiDogBowl, GiWhistle, GiDogHouse } from "react-icons/gi";
import { GiSpikedCollar } from "react-icons/gi";

function Icons({ children }) {
  return (
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-100 border border-orange-300 text-slate-400 hover:text-slate-100 hover:bg-orange-300 transition-colors duration-500 flex justify-center items-center">
      {children}
    </div>
  );
}

export default function Access() {
  const services = [
    { id: 1, icon: <FaStethoscope size={28} />, label: "Veterinarias" },
    { id: 2, icon: <BsScissors size={28} />, label: "Peluquería" },
    { id: 3, icon: <GiDogBowl size={28} />, label: "Alimentos" },
    { id: 4, icon: <FaDog size={28} />, label: "Paseadores" },
    { id: 5, icon: <FaHeart size={28} />, label: "Adopción" },
    { id: 6, icon: <GiWhistle size={28} />, label: "Entrenadores" },
    { id: 7, icon: <GiSpikedCollar size={28} />, label: "Accesorios" },
    { id: 8, icon: <GiDogHouse size={28} />, label: "Guarderías" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 py-4">
      {/** Divide los íconos en dos filas */}
      {[services.slice(0, 4), services.slice(4)].map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row justify-center gap-4">
          {row.map((service) => (
            <div key={service.id} title={service.label}>
              <Icons key={service.id} title={service.label}>
                {service.icon}
              </Icons>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
