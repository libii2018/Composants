import Image from "next/image";
import React from "react";
import ButtonThird from "../uikit/buttons/ButtonThird";
import ButtonFour from "../uikit/buttons/ButtonFour";

export default function Header3() {
  return (
    <div className="relative">
      <div className="px-[5%]  h-full mx-auto lg:max-w-[80rem] lg:px-0">
        <div className="flex justify-start items-center min-h-[100svh] max-h-[60rem]">
          <div className="w-full max-w-[42rem]">
            <div className="mt-0 mr-0 mb-6 ml-0">
              <h2 className="leading-tight text-4xl font-semibold text-white lg:text-6xl lg:font-bold">
                Medium length section heading goes here
              </h2>
            </div>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-8 mr-0 mb-0 ml-0">
              <div className="flex items-center gap-4">
                <ButtonThird>Button</ButtonThird>
                <ButtonFour>Button</ButtonFour>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[-1] bg-black/20">
        <div className="absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[1] bg-black/50"></div>
        <Image
          src="img/6243807090316203124aee66_placeholder-image.svg"
          width={550}
          height={550}
          alt="placeholder"
          className="w-full h-full object-cover absolute top-[0%] left-[0%] right-[0%] bottom-[0%]"
        />
      </div>
    </div>
  );
}
