import Image from "next/image";
import HeaderGen from "../uikit/layout/headers/HeaderGen";

export default function Header() {
  return (
    <HeaderGen
      Version="vertical"
      tag="Tagline"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      btnName1="button"
      btnName2="button"
      btnType={2}
      image={
        <Image
          src="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
          width={1263}
          height={152}
          alt="palcehplder"
          className="w-full  h-full object-cover"
        />
      }
    />
  );
}
