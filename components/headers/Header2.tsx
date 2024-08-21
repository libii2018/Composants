import Image from "next/image";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";
import ModuleHeader1 from "../uikit/layout/headers/module/ModuleHeader1";
import ModuleHeadOverlay from "../uikit/layout/headers/module/ModuleHeadOverlay";

export default function Header2() {
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
        <ModuleHeadOverlay>
          <Image
            src="img/6243807090316203124aee66_placeholder-image.svg"
            width={550}
            height={550}
            alt="placeholder"
            className="w-full h-full object-cover absolute top-[0%] left-[0%] right-[0%] bottom-[0%]"
          />
        </ModuleHeadOverlay>
      }
    />
  );
}
