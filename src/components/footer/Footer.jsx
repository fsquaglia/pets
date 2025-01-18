import { resposability, cooquie, developer } from "@/utils/initialSetting";

function Footer() {
  return (
    <div className="bg-neutral-100 w-full flex flex-row justify-center sm:justify-between items-center p-4">
      {/*sección izquierda */}
      <div className="w-72 hidden sm:block text-center text-sm text-slate-800">
        <p>{resposability}</p>
      </div>
      {/*sección central (desarrollador) */}
      <div className="p-2 flex justify-center items-center">
        <p className="w-48 px-8 py-2 border rounded rounded-full shadow-lg bg-orange-400 text-center text-slate-100">
          {developer}
        </p>
      </div>
      {/*sección derecha */}
      <div className="w-72 hidden sm:block text-center text-sm text-slate-800">
        {cooquie}
      </div>
    </div>
  );
}

export default Footer;
