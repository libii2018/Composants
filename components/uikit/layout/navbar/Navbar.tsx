"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React, { useState } from "react";
import BtnLayout1 from "../../buttons/layout/BtnLayout1";
import ButtonFour from "../../buttons/ButtonFour";
import ButtonFive from "../../buttons/ButtonFive";
import Image from "next/image";

type Props = {
  Version?: string;
};

export default function Navbar({ Version }: Props) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  let classname4: string = "";
  let classname5: string = "";

  if (Version === "1") {
    classname1 = "";
    classname2 = "";
    classname5 = "";
    classname4 = "";
  } else if (Version === "2") {
    classname1 = "";
    classname2 = "";
    classname5 = "";
  }

  return (
    <div className="relative block bg-white border-b-[1px] border-black">
      <div className="">
        <div className="px-[5%] py-4 flex flex-row justify-between items-center w-full h-full mx-auto">
          <div className="w-max p-2">
            <a href="#" className="font-bold text-5xl">
              <Image
                src="img/624380709031625abc4aee65_company-logo.svg"
                width={550}
                height={550}
                alt="palcehplder"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          <div className="hidden lg:block">
            <nav
              className={`flex flex-row w-full justify-between items-center gap-x-9`}
            >
              <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-row justify-between items-center gap-x-10">
                  <NavigationMenuItem className="">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-lg">
                        Link One
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-lg">
                        Link Two
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="text-lg">
                        Link Three
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger className="text-lg">
                      Link Four
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute flex flex-col animate-enterFromBotton p-2">
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg py-2 px-4">
                          Link One
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg py-2 px-4">
                          Link three
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="text-lg py-2 px-4">
                          Link Four
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <BtnLayout1 className="">
                <ButtonFive className="">Button</ButtonFive>
                <ButtonFour className="">Button</ButtonFour>
              </BtnLayout1>
            </nav>
          </div>

          <div className="lg:hidden">
            <div
              onClick={handleToggle}
              className="block relative cursor-pointer bg-white"
            >
              <div className="h-[48px] w-[48px] flex flex-col items-center justify-center px-0 bg-white">
                <div
                  className={`w-[24px] h-[2px] py-0 bg-black  duration-300 ${
                    open ? "translate-y-[8px] rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`w-[24px] h-[2px] my-[6px] bg-black duration-200 ${
                    open ? "w-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-[24px] h-[2px] py-0 bg-black  duration-300 ${
                    open ? "translate-y-[-8px] -rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            open ? "h-[465px] duration-100" : "h-0 duration-200"
          } px-[5%] w-full  overflow-scroll block`}
        >
          <nav
            className={`${
              open
                ? "translate-y-[0px] block duration-200"
                : " translate-y-[-500px] none duration-200"
            } `}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col justify-start items-start">
                <NavigationMenuItem className="w-full py-3 text-lg">
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Link One</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full py-3 text-lg">
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Link Two</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full py-3 text-lg">
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Link Three</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full py-3 text-lg">
                  <NavigationMenuTrigger className="w-full py-3 text-lg justify-start p-0">
                    Link Foor
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col pl-2 pt-4 gap-y-4 bg-white">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink>Link One</NavigationMenuLink>
                    </Link>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink>Link three</NavigationMenuLink>
                    </Link>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink>Link Four</NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <BtnLayout1 className="flex-col w-full mt-8 mb-24">
              <ButtonFive className="w-full">Button</ButtonFive>
              <ButtonFour className="w-full">Button</ButtonFour>
            </BtnLayout1>
          </nav>
        </div>
      </div>
    </div>
  );
}
