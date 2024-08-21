import Image from "next/image";
import React from "react";
import ButtonThird from "../uikit/buttons/ButtonThird";
import ButtonFour from "../uikit/buttons/ButtonFour";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";

export default function Header3() {
  return (
    <HeaderGen1
      orientation="horizontal"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      btnNameInput="Ok"
      inputNamePlaceholder="Enter the email"
      image={ModuleHeadOverlay}
    />
  );
}
