import Image from "next/image";
import HeaderGen1 from "../uikit/layout/headers/HeaderGen1";

export default function Header1() {
  return (
    <HeaderGen1
      orientation="vertion3"
      title="Medium length section heading goes here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      btnName1="button"
      btnName2="button"
    />
  );
}
