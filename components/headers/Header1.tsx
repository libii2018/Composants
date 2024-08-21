import Image from "next/image";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";
import ModuleHeader1 from "../uikit/layout/headers/module/ModuleHeader1";

export default function Header1() {
  return (
    <HeaderGen1
      left={
        <ModuleHeader1
          title="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis
          viverra ornare, eros dolor interdum nulla, ut commodo diam libero
          vitae erat."
          btnNameInput="Sign up"
          inputNamePlaceholder="Enter your email"
        />
      }
      right={
        <Image
          src="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
          width={550}
          height={550}
          alt="palcehplder"
          className="w-full object-cover"
        />
      }
    />
  );
}
