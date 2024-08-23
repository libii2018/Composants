import Image from "next/image";
import React from "react";
import HeaderGen from "../uikit/layout/headers/HeaderGen";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header7() {
  return (
    <HeaderGen
      Version="v4"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis
      viverra ornare, eros dolor interdum nulla, ut commodo diam libero
      vitae erat."
      btnName1="button"
      btnName2="button"
      btnType={3}
      imageBgOverlay="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
    />
  );
}
