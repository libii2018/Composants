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

export default function HeaderGen1({
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
  if (orientation === "verticale") {
    classname1 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (orientation === "horizontal") {
    classname1 = "flex flex-col-reverse h-[100svh] min-h-[100svh]";
    classname2 = "w-full relative h-[65%]";
  } else if (orientation === "vertion3") {
  }
  return (
    <div className="px-[5%] py-16 lg:px-0">
      <div className={classname1}>
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
        {image && <div className={classname2}>{image}</div>}
      </div>
    </div>
  );
}
