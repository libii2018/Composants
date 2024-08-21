import Image from "next/image";
import ButtonThird from "../uikit/buttons/ButtonThird";
import ButtonFive from "../uikit/buttons/ButtonFive";

export default function Header2() {
  return (
    <div className="px-[5%] py-16 lg:px-0">
      <div className="flex flex-col gap-y-[--gap-y-1] h-[100svh] min-h-[100svh]">
        <div className="w-full h-[65%]">
          <a
            href="#"
            className="flex flex-col items-center w-full h-full relative"
          >
            <Image
              src="img/6243807090316259584aee68_placeholder-video-thumbnail.svg"
              width={1263}
              height={152}
              alt="palcehplder"
              className="w-full h-full object-cover"
            />
            <div className="flex z-[2] text-white justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col justify-center items-center h-20 w-20">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z"
                    fill="CurrentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute top-[0%] bottom-[0%] left-[0%] right-[0%] z-[1] bg-black/50"></div>
          </a>
        </div>
        <div className="px-[5%]">
          <div className="flex flex-col lg:flex-row lg:gap-x-20">
            <div>
              <div className="mt-0 mr-0 mb-4 ml-0">
                <h2 className="leading-tight font-semibold text-4xl lg:text-5xl lg:font-bold">
                  Medium length section heading goes here
                </h2>
              </div>
            </div>
            <div>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="mt-8 mr-0 mb-0 ml-0">
                <div className="flex items-center gap-4">
                  <ButtonThird>Button</ButtonThird>
                  <ButtonFive>Button</ButtonFive>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
