import { nameApp } from "@/utils/initialSetting";

function Navbar() {
  return (
    <div className="h-full w-full bg-orange-300 flex flex-col gap-2 p-2">
      {/*íconos del navbar */}
      <div className="flex flex-row">
        {/*ícono burger, si es necesario */}
        <div className="size-12 bg-green-500">Burger icon react</div>
        {/*íconos de búsqueda y sesión */}
        <div className="flex flex-row gap-2">
          {/*ícono de acceso a búsqueda */}
          <div className="size-12 bg-slate-500">Lupa icon react</div>
          <div className="size-12 bg-pink-500">Campanita icon react</div>
          <div className="size-12 bg-yellow-500">User icon react</div>
        </div>
      </div>
      {/*título de la app */}
      <div className="text-center text-xl font-light text-orange-800">
        <h1>{nameApp}</h1>
      </div>
    </div>
  );
}

export default Navbar;
