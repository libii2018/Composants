import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
              <div className="lg:max-w-[30rem]">
                <form
                  action=""
                  className="flex flex-col gap-y-3 mb-4 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_max-content] lg:gap-x-4"
                >
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-black h-auto min-h-11 mb-0 px-2 py-3 text-base leading-relaxed bg-white text-white"
                  />
                  <Button variant={"submit"} size={"submit"} asChild>
                    <input type="submit" value="Sign up" />
                  </Button>
                </form>
                <div className="text-white text-xs">
                  By clicking Sign Up you're confirming that you agree with our{" "}
                  <Button variant={"link2"} size={"link2"}>
                    <a href="#">Terms and Conditions</a>
                  </Button>
                </div>
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
