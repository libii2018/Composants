import Image from "next/image";
import React from "react";
import HeaderGen from "../uikit/layout/headers/HeaderGen";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header13() {
  return (
    <HeaderGen
      Version="v5"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    varius enim in eros elementum tristique. Duis cursus, mi quis
    viverra ornare, eros dolor interdum nulla, ut commodo diam libero
    vitae erat."
      btnName1="button"
      btnName2="button"
      btnType={2}
      image={
        <ModuleHeadOverlay className="bg-white/20">
          <Image
            src="img/6243807090316203124aee66_placeholder-image.svg"
            width={550}
            height={550}
            alt="palcehplder"
            className="w-full h-full object-cover"
          />
        </ModuleHeadOverlay>
      }
    />
  );
}
