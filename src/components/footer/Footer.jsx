import { resposability, cooquie, developer } from "@/utils/initialSetting";

function Footer() {
  return (
    <div clasName="w-full flex flex-row flex-wrap">
      {/*sección izquierda */}
      <div clasName="w-1/3 text-left">{resposability}</div>
      {/*sección central (desarrollador) */}
      <div clasName="w-1/3 text-center">{developer}</div>
      {/*sección derecha */}
      <div clasName="w-1/3 text-right">{cooquie}</div>
    </div>
  );
}

export default Footer;
