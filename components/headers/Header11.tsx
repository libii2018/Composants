import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Header10() {
  return (
    <div className="flex flex-col h-[100vh] min-h-[100vh]">
      <div className="mb-20">
        <div className="px-[5%]">
          <div className="w-full max-w-[80rem] mx-auto py-12">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-20">
              <div className="">
                <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                  Medium length hero heading goes here
                </h1>
              </div>
              <div className="lg:flex lg:flex-col lg:justify-between">
                <p className="text-base leading-normal lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="mt-8 mr-0 mb-0 ml-0">
                  <div>
                    <div className="flex items-center gap-4">
                      <Button variant={"third"} size={"third"}>
                        Button
                      </Button>
                      <Button variant={"five"} size={"five"}>
                        Button
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[65%]">
        <Image
          src="img/6243807090316203124aee66_placeholder-image.svg"
          width={1263}
          height={152}
          alt="palcehplder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
