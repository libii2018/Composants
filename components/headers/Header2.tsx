import Image from "next/image";
import ButtonSecondary from "../uikit/buttons/ButtonSecondary";
import ButtonLink from "../uikit/buttons/ButtonLink";

export default function Header2() {
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
              <div className="flex items-center gap-4">
                <ButtonSecondary>Button</ButtonSecondary>
                <ButtonLink>Button</ButtonLink>
              </div>
            </div>
          </div>
        </div>
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
