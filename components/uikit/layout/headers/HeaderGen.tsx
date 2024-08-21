import React from "react";
import ModuleHeader1 from "./module/ModuleHeader1";

type Props = {
  tag: string;
  title: string;
  description: string;
  btnName1: string;
  btnName2: string;
  btnNameInput: string;
  inputNamePlaceholder: string;
  orientation: string;
  image: React.ReactNode;
};

export default function HeaderGen({
  orientation,
  tag,
  title,
  description,
  btnName1,
  btnName2,
  btnNameInput,
  inputNamePlaceholder,
  image,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  if (orientation === "vertical") {
    classname2 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (orientation === "horizontal") {
    classname2 = "flex flex-col-reverse h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (orientation === "overlay") {
    classname1 = "relative";
  }
  return (
    <div className={`px-[5%] py-16 lg:px-0 ${classname1}`}>
      <div className={classname2}>
        <ModuleHeader1
          orientation={orientation}
          tag={tag}
          title={title}
          description={description}
          btnName1={btnName1}
          btnName2={btnName2}
          btnNameInput={btnNameInput}
          inputNamePlaceholder={inputNamePlaceholder}
        />
        {image && <div className={classname3}>{image}</div>}
      </div>
    </div>
  );
}
