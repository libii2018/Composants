import Image from "next/image";
import React from "react";
import HeaderGen from "../uikit/layout/headers/HeaderGen";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header14() {
  return (
    <HeaderGen
      Version="v4"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat."
      btnNameInput="Sign up"
      inputNamePlaceholder="Enter your email"
      imageBgOverlay="img/6243807090316203124aee66_placeholder-image.svg"
    />
  );
}
