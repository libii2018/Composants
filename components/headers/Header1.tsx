import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header1() {
  return (
    <div className="px-[--padding-x-1] py-[--padding-y-1] lg:px-[--padding-x-2]">
      <div className="flex flex-col gap-y-[--gap-y-1] lg:grid lg:grid-cols-2 lg:gap-x-[--gap-x-1] lg:items-center">
        <div className="pl-[--padding-l]">
          <div className="flex flex-col">
            <div className="mt-[--margin-t-1] mr-[--margin-r-1] mb-[--margin-b-1] ml-[--margin-l-1]">
              <div className="font-[--font-semibold]">Tagline</div>
            </div>
            <div className="mt-[--margin-t-1] mr-[--margin-r-1] mb-[--margin-b-1] ml-[--margin-l-1]">
              <h2 className="leading-[--line-height-1] font-[--font-semibold] text-[--text-1] lg:text-[--font-1] lg:font-[--font-bold]">
                Medium length section heading goes here
              </h2>
            </div>
            <p className="font-[--font-size-lg] leading-[--line-height-1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-[--margin-t-2] mr-[--margin-r-1] mb-[--margin-b-2] ml-[--margin-l-1]">
              <div className="flex items-center gap-[--gap-1]">
                <Button variant={"secondary"} size={"secondary"}>
                  Button
                </Button>
                <Button variant={"link"} size={"link"}>
                  Button{" "}
                  <div className="flex flex-col items-center w-4 h-4 justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="CurrentColor"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="img/placeholder-image.svg"
          width={550}
          height={550}
          alt="palcehplder"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
