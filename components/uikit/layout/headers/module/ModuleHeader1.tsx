/**
 * Header card component
 * @param {string} tag It allows adding a tag to the headers
 * @param {string} title It allows adding a title to the headers
 * @param {string} description It allows adding a description to the headers
 * @param {string} btnName1 It allows naming the left button
 * @param {string} btnName2 It allows naming the right button
 * @param {string} btnNameInput It allows naming the form button
 * @param {string} inputNamePlaceholder It allows naming the input placeholder
 * @param {string} Version It allows choosing different header templates
 * @param {string} btnType It allows choosing the button layout
 */

import ButtonFive from "@/components/uikit/buttons/ButtonFive";
import ButtonFour from "@/components/uikit/buttons/ButtonFour";
import ButtonLink from "@/components/uikit/buttons/ButtonLink";
import ButtonSecondary from "@/components/uikit/buttons/ButtonSecondary";
import ButtonSix from "@/components/uikit/buttons/ButtonSix";
import ButtonThird from "@/components/uikit/buttons/ButtonThird";
import BtnLayout1 from "@/components/uikit/buttons/layout/BtnLayout1";
import Card from "@/components/uikit/card/Card";
import CardDescription from "@/components/uikit/card/CardDescription";
import CardFooter from "@/components/uikit/card/CardFooter";
import CardTag from "@/components/uikit/card/CardTag";
import CardTitle from "@/components/uikit/card/CardTitle";
import Form1 from "@/components/uikit/forms/Form1";
import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  Version?: string;
  tag?: string;
  title?: string;
  description?: string;
  btnName1?: string;
  btnName2?: string;
  btnNameInput?: string;
  inputNamePlaceholder?: string;
  btnType?: number;
};

export default function ModuleHeader1({
  Version,
  tag,
  title,
  description,
  btnName1,
  btnName2,
  btnNameInput,
  inputNamePlaceholder,
  btnType,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  let classname4: string = "";
  let classname5: string = "";
  let classname6: string = "";
  let classname7: string = "";
  let classname8: string = "";
  let classname9: string = "";
  let classname10: string = "";
  let classname11: string = "";
  let classname12: string = "";
  let classname13: string = "";
  let classname14: string = "";
  let classname15: string = "";
  let classname16: string = "";
  let classname17: string = "";
  let btnColor: string = "";
  if (Version === "vertical") {
    classname1 = "flex flex-col";
  } else if (Version === "horizontal") {
    classname1 = "w-full max-w-[80rem] mx-auto py-12";
    classname2 = "flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-x-20";
    classname3 = "lg:flex lg:flex-col";
    classname6 = "";
  } else if (Version === "horizontal2") {
    classname1 = "w-full max-w-[80rem] mx-auto py-12";
    classname2 = "flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-x-20";
    classname3 = "lg:flex lg:flex-col";
    classname6 = "";
  } else if (Version === "overlay") {
    classname2 = "text-center text-white max-w-[48rem]";
    classname1 = "flex flex-col gap-y-12 justify-center items-center";
    classname6 = "justify-center text-white";
    classname9 = "text-white justify-center";
    btnColor = "text-white";
  } else if (Version === "overlay2") {
    classname1 = "flex flex-col w-full";
  } else if (Version === "v3") {
    classname2 = "text-center max-w-[48rem]";
    classname1 =
      "flex flex-col gap-y-12 justify-center items-center text-white";
    classname6 = "flex justify-center items-center";
    classname9 = "flex justify-center items-center";
    btnColor = "text-white";
  } else if (Version === "v4") {
    classname1 = "flex flex-col gap-y-12 text-white";
    btnColor = "text-white";
  } else if (Version === "v5") {
    classname1 = "flex flex-col gap-y-12 text-black";
    btnColor = "text-black";
  } else if (Version === "v6") {
    classname1 = "flex flex-col gap-y-12 text-black mb-20";
    classname2 = "flex flex-col max-w-[48rem]";
    classname10 = "mb-6";
    classname5 = "mb-8";
    btnColor = "text-black";
  } else if (Version === "v7") {
    classname1 =
      "flex flex-col justify-center items-center gap-y-12 text-black mb-20";
    classname2 = " max-w-[48rem]";
    classname10 = "mb-6 text-center";
    classname3 = "text-center";
    classname5 = "mb-8";
    classname6 = "flex flex-row justify-center items-center";
    btnColor = "text-black";
  } else if (Version === "v8") {
    classname1 = "flex flex-col mb-20";
    classname11 = "flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 mt-6";
    classname13 = "font-bold text-xl leading-normal mb-4";
    classname14 = "font-medium text-base leading-normal mb-4";
  } else if (Version === "v9") {
    classname1 = "flex flex-col mb-20";
    classname11 = "flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 mt-6";
    classname13 = "font-bold text-xl leading-normal mb-4";
    classname14 = "font-medium text-base leading-normal mb-4";
    classname15 = "flex lg:flex-row items-start";
    classname16 = "w-8 h-8 object-cover mr-7";
  } else if (Version === "v10") {
    classname1 = "flex flex-col mb-20";
    classname11 = "flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 mt-6";
    classname15 = "flex flex-row flex-wrap gap-x-6 gap-y-8";
  } else if (Version === "v11") {
    classname1 = "flex flex-col mb-20";
    classname11 = "flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 mt-2";
    classname13 = "my-8";
    classname14 = "font-medium text-base leading-normal mb-4";
    classname15 = "flex lg:flex-row items-start";
    classname16 = "w-8 h-8 object-cover mr-1";
  } else if (Version === "v12") {
    classname1 = "flex flex-col mb-20";
    classname12 = "max-w-64";
    classname11 = "flex flex-col gap-y-12 lg:flex-row lg:gap-x-6 mt-6";
    classname13 = "font-bold text-5xl leading-normal mb-4";
    classname14 = "font-medium text-base leading-normal mb-4";
  } else if (Version === "v13") {
    classname1 = "flex flex-col";
    classname2 = "pl-7";
    classname5 = "flex flex-col gap-y-8";
  } else if (Version === "v14") {
    classname2 = "flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:grid-rows-2";
    classname10 = "font-bold lg:text-2xl leading-normal mb-4";
    classname4 = "font-medium lg:text-sm leading-normal mb-4";
    classname16 = "mb-5";
  } else if (Version === "v15") {
    classname1 = "flex flex-col mb-20";
    classname11 = "flex flex-col gap-y-6 mt-6";
    classname13 = "font-bold text-3xl leading-normal mb-4";
    classname14 = "font-medium text-base leading-normal mb-4";
    classname15 = "flex lg:flex-row items-start";
    classname16 = "w-12 h-12 object-cover mr-7";
  }

  return (
    <div className={classname1}>
      {Version !== "v13" && Version !== "v14" && Version !== "v15" && (
        <Card className={classname2}>
          <div className={classname10}>
            {tag && <CardTag>{tag}</CardTag>}
            <CardTitle className="">{title}</CardTitle>
          </div>
          <div className={classname3}>
            <CardDescription className={classname4}>
              {description}
            </CardDescription>
            {Version === "v8" && (
              <div className={classname11}>
                <div className={classname12}>
                  <div className={classname13}>
                    <h3>Subheading one</h3>
                  </div>
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className={classname12}>
                  <div className={classname13}>
                    <h3>Subheading two</h3>
                  </div>
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {Version === "v9" && (
              <div className={classname11}>
                <div className={classname15}>
                  <Image
                    src="img/624380709031626fc14aee84_icon.svg"
                    width={150}
                    height={150}
                    alt="palcehplder"
                    className={classname16}
                  />
                  <div className={classname12}>
                    <div className={classname13}>
                      <h3>Subheading one</h3>
                    </div>
                    <div className={classname14}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classname15}>
                  <Image
                    src="img/624380709031626fc14aee84_icon.svg"
                    width={150}
                    height={150}
                    alt="palcehplder"
                    className={classname16}
                  />
                  <div className={classname12}>
                    <div className={classname13}>
                      <h3>Subheading one</h3>
                    </div>
                    <div className={classname14}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {Version === "v11" && (
              <div className={classname13}>
                <div className={classname11}>
                  <Image
                    src="img/624380709031626fc14aee84_icon.svg"
                    width={150}
                    height={150}
                    alt="palcehplder"
                    className={classname16}
                  />
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={classname11}>
                  <Image
                    src="img/624380709031626fc14aee84_icon.svg"
                    width={150}
                    height={150}
                    alt="palcehplder"
                    className={classname16}
                  />
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={classname11}>
                  <Image
                    src="img/624380709031626fc14aee84_icon.svg"
                    width={150}
                    height={150}
                    alt="palcehplder"
                    className={classname16}
                  />
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {Version === "v12" && (
              <div className={classname11}>
                <div className={classname12}>
                  <div className={classname13}>
                    <h3>50%</h3>
                  </div>
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={classname12}>
                  <div className={classname13}>
                    <h3>50%</h3>
                  </div>
                  <div className={classname14}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <CardFooter className={classname5}>
              {btnName1 && btnName2 && btnType === 1 && (
                <BtnLayout1 className={classname6}>
                  <ButtonSecondary className={classname7}>
                    {btnName1}
                  </ButtonSecondary>
                  <ButtonLink className={classname8}>{btnName2}</ButtonLink>
                </BtnLayout1>
              )}
              {/* <ButtonThird className="">Button</ButtonThird> */}
              {btnName1 && btnName2 && btnType === 2 && (
                <BtnLayout1 className={classname6}>
                  <ButtonFour className={classname8}>{btnName2}</ButtonFour>
                  <ButtonFive className={classname7}>{btnName1}</ButtonFive>
                </BtnLayout1>
              )}
              {btnName1 && btnName2 && btnType === 3 && (
                <BtnLayout1 className={classname6}>
                  <ButtonThird className={classname8}>{btnName2}</ButtonThird>
                  <ButtonSix className={classname7}>{btnName1}</ButtonSix>
                </BtnLayout1>
              )}
              {btnNameInput && inputNamePlaceholder && (
                <Form1
                  btnColor={btnColor}
                  className={classname9}
                  btnNameInput={btnNameInput}
                  inputNamePlaceholder={inputNamePlaceholder}
                />
              )}
            </CardFooter>
          </div>
        </Card>
      )}

      {Version === "v13" && (
        <div className={classname5}>
          <a href="#" className={`${classname2} border-l-4 border-black`}>
            <Card className="">
              <div className={classname10}>
                <CardTitle className="">{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
          </a>
          <a href="#" className={`${classname2} border-l-4`}>
            <Card className="">
              <div className={classname10}>
                <CardTitle className="">{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
          </a>
          <a href="#" className={`${classname2} border-l-4`}>
            <Card className="">
              <div className={classname10}>
                <CardTitle className="">{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
          </a>
        </div>
      )}
      {Version === "v14" && (
        <div>
          <div className={classname2}>
            <Card className="text-ba">
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={50}
                height={50}
                alt="palcehplder"
                className={classname16}
              />
              <div className="">
                <CardTitle className={classname10}>{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
            <Card className="">
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={50}
                height={50}
                alt="palcehplder"
                className={classname16}
              />
              <div className="">
                <CardTitle className={classname10}>{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
            <Card className="">
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={50}
                height={50}
                alt="palcehplder"
                className={classname16}
              />
              <div className="">
                <CardTitle className={classname10}>{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
            <Card className="">
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={50}
                height={50}
                alt="palcehplder"
                className={classname16}
              />
              <div className="">
                <CardTitle className={classname10}>{title}</CardTitle>
              </div>
              <div className={classname3}>
                <CardDescription className={classname4}>
                  {description}
                </CardDescription>
              </div>
            </Card>
          </div>
          <div className="mt-10">
            {btnName1 && btnName2 && btnType === 1 && (
              <BtnLayout1 className={classname6}>
                <ButtonSecondary className={classname7}>
                  {btnName1}
                </ButtonSecondary>
                <ButtonLink className={classname8}>{btnName2}</ButtonLink>
              </BtnLayout1>
            )}
            {/* <ButtonThird className="">Button</ButtonThird> */}
            {btnName1 && btnName2 && btnType === 2 && (
              <BtnLayout1 className={classname6}>
                <ButtonFour className={classname8}>{btnName2}</ButtonFour>
                <ButtonFive className={classname7}>{btnName1}</ButtonFive>
              </BtnLayout1>
            )}
            {btnName1 && btnName2 && btnType === 3 && (
              <BtnLayout1 className={classname6}>
                <ButtonThird className={classname8}>{btnName2}</ButtonThird>
                <ButtonSix className={classname7}>{btnName1}</ButtonSix>
              </BtnLayout1>
            )}
            {btnNameInput && inputNamePlaceholder && (
              <Form1
                btnColor={btnColor}
                className={classname9}
                btnNameInput={btnNameInput}
                inputNamePlaceholder={inputNamePlaceholder}
              />
            )}
          </div>
        </div>
      )}
      {Version === "v15" && (
        <div>
          <div className={classname11}>
            <div className={classname15}>
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={200}
                height={200}
                alt="palcehplder"
                className={classname16}
              />
              <div className={classname12}>
                <div className={classname13}>
                  <h3>Subheading one</h3>
                </div>
                <div className={classname14}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
              </div>
            </div>
            <div className={classname15}>
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={200}
                height={200}
                alt="palcehplder"
                className={classname16}
              />
              <div className={classname12}>
                <div className={classname13}>
                  <h3>Subheading one</h3>
                </div>
                <div className={classname14}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
              </div>
            </div>
            <div className={classname15}>
              <Image
                src="img/624380709031626fc14aee84_icon.svg"
                width={200}
                height={200}
                alt="palcehplder"
                className={classname16}
              />
              <div className={classname12}>
                <div className={classname13}>
                  <h3>Subheading one</h3>
                </div>
                <div className={classname14}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {btnName1 && btnName2 && btnType === 1 && (
              <BtnLayout1 className={classname6}>
                <ButtonSecondary className={classname7}>
                  {btnName1}
                </ButtonSecondary>
                <ButtonLink className={classname8}>{btnName2}</ButtonLink>
              </BtnLayout1>
            )}
            {/* <ButtonThird className="">Button</ButtonThird> */}
            {btnName1 && btnName2 && btnType === 2 && (
              <BtnLayout1 className={classname6}>
                <ButtonFour className={classname8}>{btnName2}</ButtonFour>
                <ButtonFive className={classname7}>{btnName1}</ButtonFive>
              </BtnLayout1>
            )}
            {btnName1 && btnName2 && btnType === 3 && (
              <BtnLayout1 className={classname6}>
                <ButtonThird className={classname8}>{btnName2}</ButtonThird>
                <ButtonSix className={classname7}>{btnName1}</ButtonSix>
              </BtnLayout1>
            )}
            {btnNameInput && inputNamePlaceholder && (
              <Form1
                btnColor={btnColor}
                className={classname9}
                btnNameInput={btnNameInput}
                inputNamePlaceholder={inputNamePlaceholder}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
