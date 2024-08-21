import { Button } from "@/components/ui/button";
import Image from "next/image";
import ButtonSubmit from "../uikit/buttons/ButtonSubmit";
import ButtonLink2 from "../uikit/buttons/ButtonLink2";

export default function Header() {
  return (
    <div className="px-[5%] py-16 lg:px-0">
      <div className="flex flex-col gap-y-[--gap-y-1] lg:grid lg:grid-cols-2 lg:gap-x-[--gap-x-1] lg:items-center">
        <div className="pl-[5%]">
          <div className="flex flex-col">
            <div className="mt-0 mr-0 mb-4 ml-0">
              <div className="font-semibold">Tagline</div>
            </div>
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
                  <ButtonSubmit>Sign up</ButtonSubmit>
                </form>
                <div className="text-black text-xs">
                  By clicking Sign Up you're confirming that you agree with our{" "}
                  <ButtonLink2>Terms and Conditions</ButtonLink2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="img/6243807090316203124aee66_placeholder-image.svg"
          width={550}
          height={550}
          alt="palcehplder"
          className="w-full object-cover text-black"
        />
      </div>
    </div>
  );
}
