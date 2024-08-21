import HeaderGen from "../uikit/layout/headers/HeaderGen";

export default function Header2() {
  return (
    <HeaderGen
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
