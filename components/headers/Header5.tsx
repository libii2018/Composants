import { Button } from "@/components/ui/button";
import Image from "next/image";
import ButtonThird from "../uikit/buttons/ButtonThird";
import ButtonFive from "../uikit/buttons/ButtonFive";
import HeaderGen from "../uikit/layout/headers/HeaderGen";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header2() {
  return (
    <HeaderGen
      orientation="overlay"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      btnNameInput="Ok"
      inputNamePlaceholder="Enter the email"
      image={
        <ModuleHeadOverlay>
          <Image
            src="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
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
