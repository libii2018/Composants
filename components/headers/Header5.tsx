import Image from "next/image";
import HeaderGen from "../uikit/layout/headers/HeaderGen";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header5() {
  return (
    <HeaderGen
      Version="v3"
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
