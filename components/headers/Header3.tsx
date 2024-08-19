import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header3() {
  return (
    <div className="px-[5%] py-16 lg:px-0 relative">
      <div className="flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        <div className="pl-[5%]">
          <div className="flex flex-col">
            <div className="mt-0 mr-0 mb-4 ml-0">
              <h2 className="leading-tight font-semibold text-4xl lg:text-5xl lg:font-bold">
                Medium length section heading goes here
              </h2>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-gradient-[]">
        <Image
          src="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
          width={550}
          height={550}
          alt="palcehplder"
          className="w-full object-cover text-black"
        />
      </div>
    </div>
  );
}
