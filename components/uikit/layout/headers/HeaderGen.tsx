/**
 *
 * It allows generating different versions of headers
 * @param {string} tag It allows adding a tag to the headers
 * @param {string} title It allows adding a title to the headers
 * @param {string} description It allows adding a description to the headers
 * @param {string} btnName1 It allows naming the left button
 * @param {string} btnName2 It allows naming the right button
 * @param {string} btnNameInput It allows naming the form button
 * @param {string} inputNamePlaceholder It allows naming the input placeholder
 * @param {string} Version It allows choosing different header templates
 * @param {string} image It allows setting the image path
 * @param {string} imageOverlay It allows setting the image path for the overlay
 * @param {string} imageOverlayVideo It allows setting the video path for the overlay
 * @param {string} imageBgOverlay It allows setting the image path for the header overlay background
 * @param {string} btnType It allows choosing the button layout
 */

import React from "react";
import ModuleHeader1 from "./module/ModuleHeader1";
import ModuleHeadOverlay from "./module/ModuleHeadOverlay";
import Image from "next/image";
import ModuleHeadOverlayWhite from "./module/ModuleHeadOverlayWhite";

type Props = {
  tag?: string;
  title?: string;
  description?: string;
  btnName1?: string;
  btnName2?: string;
  btnNameInput?: string;
  inputNamePlaceholder?: string;
  Version?: string;
  image?: string;
  btnType?: number;
  imageOverlay?: string;
  imageBgOverlay?: string;
  imageOverlayVideo?: string;
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
  imageOverlay,
  imageBgOverlay,
  imageOverlayVideo,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  if (Version === "vertical") {
    classname2 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (Version === "horizontal") {
    classname2 = "flex flex-col-reverse h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (Version === "horizontal2") {
    classname2 = "flex flex-col h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (Version === "imageOverlay") {
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
    // imageBgOverlay = image;
  } else if (Version === "v4") {
    classname1 = "relative";
    classname2 =
      "flex flex-col gap-y-12 h-full w-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
    classname3 = "hidden";
    // imageBgOverlay = image;
  } else if (Version === "v5") {
    classname1 = "relative ";
    classname2 =
      "flex flex-col gap-y-12 h-full w-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
    classname3 = "hidden";
    // imageBgOverlay = image;
  } else if (Version === "v6") {
    classname2 = "flex flex-col h-[100svh] min-h-[100svh]";
    classname3 = "w-full relative h-[65%]";
  } else if (Version === "v7") {
    classname2 = "flex flex-col h-[100svh] min-h-[100svh] ";
    classname3 = "w-full relative  h-[65%]";
  } else if (Version === "v8") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v9") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v10") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v11") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v12") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v13") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v14") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center";
  } else if (Version === "v15") {
    classname2 =
      "flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-40 lg:items-center";
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
        <div className={classname3}>
          {image && (
            <Image
              src={image}
              width={550}
              height={550}
              alt="palcehplder"
              className="w-full h-full object-cover"
            />
          )}
          {imageOverlay && (
            <ModuleHeadOverlay className="">
              <Image
                src={imageOverlay}
                width={550}
                height={550}
                alt="palcehplder"
                className="w-full h-full object-cover"
              />
            </ModuleHeadOverlay>
          )}
          {imageOverlayVideo && (
            <ModuleHeadOverlayWhite className="">
              <Image
                src={imageOverlayVideo}
                width={550}
                height={550}
                alt="palcehplder"
                className="w-full h-full object-cover"
              />
            </ModuleHeadOverlayWhite>
          )}
        </div>
        {imageBgOverlay && (
          <ModuleHeadOverlay className="">
            <Image
              src={imageBgOverlay}
              width={550}
              height={550}
              alt="palcehplder"
              className="w-full h-full object-cover"
            />
          </ModuleHeadOverlay>
        )}
      </div>
    </div>
  );
}
