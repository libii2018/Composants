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
import ModuleCTA1 from "./module/ModuleCTA1";
import Image from "next/image";
import Overlay from "../Overlay";
import OverlayWhite from "../OverlayWhite";

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
  colorText?: string;
};

export default function CTA({
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
  colorText,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";

  if (imageBgOverlay) {
    classname1 = "relative";
  }
  if (Version === "1") {
    classname2 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (Version === "2") {
    classname1 = "relative";
    classname2 =
      "flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center";
  } else if (Version === "3") {
  } else if (Version === "4") {
    classname1 = "relative";
  } else if (Version === "6") {
    classname1 = "relative";
  } else if (Version === "7") {
    classname2 = "flex flex-col gap-y-10";
  } else if (Version === "8") {
    classname2 = "flex flex-col gap-y-10";
  } else if (Version === "10") {
    classname2 = "flex flex-col gap-y-16";
  }
  return (
    <div className={`px-[5%] py-24 ${classname1}`}>
      <div className={classname2}>
        <ModuleCTA1
          Version={Version}
          tag={tag}
          title={title}
          description={description}
          btnName1={btnName1}
          btnName2={btnName2}
          btnNameInput={btnNameInput}
          inputNamePlaceholder={inputNamePlaceholder}
          btnType={btnType}
          colorText={colorText}
        />
        {(Version === "1" ||
          Version === "7" ||
          Version === "8" ||
          Version === "10") && (
          <div
            className={`h-[25%] ${
              Version === "7" || Version === "8" || Version === "10"
                ? "lg:h-[640px]"
                : "lg:h-[400px]"
            }`}
          >
            {image && (
              <Image
                src={image}
                width={550}
                height={550}
                alt="palcehplder"
                className={`w-full h-full object-cover`}
              />
            )}
            {imageOverlay && (
              <Overlay className="">
                <Image
                  src={imageOverlay}
                  width={550}
                  height={550}
                  alt="palcehplder"
                  className="w-full h-full object-cover"
                />
              </Overlay>
            )}
            {imageOverlayVideo && (
              <OverlayWhite className="">
                <Image
                  src={imageOverlayVideo}
                  width={550}
                  height={550}
                  alt="palcehplder"
                  className="w-full h-full object-cover"
                />
              </OverlayWhite>
            )}
          </div>
        )}

        {imageBgOverlay && (
          <Overlay className="">
            <Image
              src={imageBgOverlay}
              width={550}
              height={550}
              alt="palcehplder"
              className="w-full h-full object-cover"
            />
          </Overlay>
        )}
      </div>
    </div>
  );
}
