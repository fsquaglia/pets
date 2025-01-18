import { nameApp } from "@/utils/initialSetting";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="h-full w-full bg-orange-300 flex flex-col gap-2 p-4">
      {/*íconos del navbar */}
      <div className="flex flex-row justify-between antialiased text-slate-600">
        {/*ícono burger, si es necesario */}
        <RxHamburgerMenu size={20} />
        {/*íconos de búsqueda, notificaciones y sesión */}
        <div className="flex flex-row gap-4">
          <IoIosSearch size={24} />
          <IoMdNotificationsOutline size={24} />
          <FaRegUser size={20} />
        </div>
      </div>
      {/*título de la app */}
      <div className="text-center text-xl font-light text-slate-100">
        <h1>{nameApp}</h1>
      </div>
    </div>
  );
}

export default Navbar;
