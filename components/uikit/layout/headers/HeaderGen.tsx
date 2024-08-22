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
  Version: string;
  image: React.ReactNode;
  btnType: number;
};

export default function HeaderGen({
  Version,
  tag,
  title,
  description,
  btnName1,
  btnName2,
  btnNameInput,
  inputNamePlaceholder,
  image,
  btnType,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  let imageOverlay: React.ReactNode;
  if (Version === "vertical") {
    classname2 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (Version === "horizontal") {
    classname2 = "flex flex-col-reverse h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (Version === "horizontal2") {
    classname2 = "flex flex-col h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (Version === "overlay") {
    classname1 = "relative";
  } else if (Version === "overlay2") {
    classname1 = "";
    classname2 =
      "flex flex-col gap-y-12 h-full w-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
    classname3 = "relative w-full lg:h-full h-[40vh]";
  } else if (Version === "v3") {
    classname1 = "relative";
    classname2 = "h-full flex flex-col justify-center items-center";
    classname3 = "hidden";
    imageOverlay = image;
  } else if (Version === "v4") {
    classname1 = "relative";
    classname2 =
      "flex flex-col gap-y-12 h-full w-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
    classname3 = "hidden";
    imageOverlay = image;
  } else if (Version === "v5") {
    classname1 = "relative ";
    classname2 =
      "flex flex-col gap-y-12 h-full w-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
    classname3 = "hidden";
    imageOverlay = image;
  }
  return (
    <div className={`px-[5%] py-16 lg:h-[100vh] ${classname1}`}>
      <div className={classname2}>
        <ModuleHeader1
          Version={Version}
          tag={tag}
          title={title}
          description={description}
          btnName1={btnName1}
          btnName2={btnName2}
          btnNameInput={btnNameInput}
          inputNamePlaceholder={inputNamePlaceholder}
          btnType={btnType}
        />
        {image && !imageOverlay && <div className={classname3}>{image}</div>}
        {imageOverlay}
      </div>
    </div>
  );
}
