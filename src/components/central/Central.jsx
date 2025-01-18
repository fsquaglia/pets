import React from "react";
import Image from "next/image";

function Central() {
  return (
    <div className="">
      <Image
        src={"/dogs_backgroundLanding.png"}
        alt="Mascota pets"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
    </div>
  );
}

export default Central;
