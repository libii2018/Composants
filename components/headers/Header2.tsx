import Image from "next/image";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";
import ModuleHeader1 from "../uikit/layout/headers/module/ModuleHeader1";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header2() {
  return (
    <HeaderGen1
      orientation="vertion3"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      btnNameInput="Ok"
      inputNamePlaceholder="Enter the email"
    />
  );
}
