import Image from "next/image";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";
import ModuleHeader1 from "../uikit/layout/headers/module/ModuleHeader1";

export default function Header() {
  return (
    <HeaderGen1
      left={
        <ModuleHeader1
          tag="Tagline"
          title="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat."
          btnName1="button"
          btnName2="button"
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
