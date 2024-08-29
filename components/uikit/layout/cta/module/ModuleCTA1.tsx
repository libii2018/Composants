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
 * @param {string} colorText
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
  colorText?: string;
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
  colorText,
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

  if (colorText === "white") {
    btnColor = "text-white";
    classname9 = "text-white";
    classname4 = "text-white";
    classname10 = "text-white";
  } else if (colorText === "black") {
    btnColor = "text-black";
    classname9 = "text-black";
    classname4 = "text-black";
    classname10 = "text-black";
  }

  if (Version === "1") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col gap-y-2";
    classname5 = "lg:mt-0";
    classname4 = "mb-5";
    classname10 = "font-extrabold";
  } else if (Version === "2") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col gap-y-2";
    classname5 = "lg:mt-0";
    classname4 = `${classname4} mb-5`;
    classname10 = `${classname10} font-extrabold`;
  } else if (Version === "3") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col lg:flex-row justify-between gap-x-16";
    classname10 = `${classname10} font-extrabold`;
  } else if (Version === "4") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col lg:flex-row justify-between gap-x-16";
    classname4 = `${classname4} mb-6`;
    classname10 = `${classname10} font-extrabold`;
  } else if (Version === "5") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col lg:flex-row justify-between gap-x-20";
    classname10 = "lg:m-0 font-extrabold";
    classname11 = "w-[50%]";
    classname12 = "w-[50%]";
  } else if (Version === "6") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col lg:flex-row justify-between gap-x-20";
    classname4 = `${classname4} mb-6`;
    classname10 = `lg:m-0 ${classname10} font-extrabold`;
    classname11 = "w-[50%]";
    classname12 = "w-[50%]";
  } else if (Version === "7") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col lg:flex-row justify-between gap-x-20";
    classname10 = "lg:m-0 font-extrabold";
    classname11 = "w-[50%]";
    classname12 = "w-[50%]";
  } else if (Version === "8") {
    classname1 = "flex flex-col";
    classname2 = "flex flex-col gap-y-4 max-w-3xl";
    classname10 = "lg:m-0 font-extrabold";
  } else if (Version === "9") {
    classname1 = "flex flex-col items-center";
    classname2 = "flex flex-col gap-y-4 max-w-3xl items-center text-center";
    classname10 = "lg:m-0 font-extrabold";
  } else if (Version === "10") {
    classname1 = "flex flex-col items-center";
    classname2 = "flex flex-col gap-y-4 max-w-3xl items-center text-center";
    classname6 = "flex justify-center";
    classname10 = "lg:m-0 font-extrabold";
  } else if (Version === "11") {
    classname1 = "flex flex-col items-center";
    classname2 = "flex flex-col gap-y-4 max-w-3xl items-center text-center";
    classname6 = "flex justify-center";
    classname10 = "lg:m-0 font-extrabold";
    classname13 = "flex flex-row justify-around";
  } else if (Version === "12") {
    classname1 = "flex flex-col items-center";
    classname2 = "flex flex-col gap-y-4 max-w-3xl items-center text-center";
    classname6 = "flex justify-center";
    classname10 = "lg:m-0 font-extrabold";
    classname16 = "w-16 h-16 object-cover mb-10";
    classname14 = " flex flex-row gap-x-16";
    classname17 = "flex flex-col justify-center items-center w-[50$]";
  } else if (Version === "13") {
    classname10 = "lg:m-0 lg:mb-10 font-extrabold";
    classname16 = "w-16 h-16 object-cover mb-10";
    classname14 = " flex flex-row gap-x-16";
    classname17 = "flex flex-col w-[50$]";
  }

  return (
    <div className={` ${classname1}`}>
      {(Version == "1" || Version == "2" || Version == "9") && (
        <Card className={classname2}>
          {tag && <CardTag className={classname3}>{tag}</CardTag>}
          <CardTitle className={classname10}>{title}</CardTitle>
          <CardDescription className={classname4}>
            {description}
          </CardDescription>
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
        </Card>
      )}
      {(Version === "3" || Version === "4") && (
        <Card className={classname2}>
          <div className={classname11}>
            {tag && <CardTag className={classname3}>{tag}</CardTag>}
            <CardTitle className={classname10}>{title}</CardTitle>
            <CardDescription className={classname4}>
              {description}
            </CardDescription>
          </div>
          <div className={classname12}>
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

      {(Version === "5" ||
        Version === "6" ||
        Version === "7" ||
        Version === "8" ||
        Version === "10" ||
        Version === "11") && (
        <Card className={classname2}>
          <div className={classname11}>
            {tag && <CardTag className={classname3}>{tag}</CardTag>}
            <CardTitle className={classname10}>{title}</CardTitle>
          </div>
          <div className={classname12}>
            <CardDescription className={classname4}>
              {description}
            </CardDescription>
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
      {Version === "11" && (
        <div className="mx-auto w-full mt-10">
          <div className={classname13}>
            <Image
              src="img/6528b4f2ce92e99795f94e2f_logo-webflow.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
            <Image
              src="img/6243807090316239734aee6b_logo-relume.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
            <Image
              src="img/6528b4f2ce92e99795f94e2f_logo-webflow.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
            <Image
              src="img/6243807090316239734aee6b_logo-relume.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
            <Image
              src="img/6528b4f2ce92e99795f94e2f_logo-webflow.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
            <Image
              src="img/6243807090316239734aee6b_logo-relume.svg"
              width={140}
              height={55}
              alt="palcehplder"
              className="w-[140px] h-[55px] object-cover"
            />
          </div>
        </div>
      )}
      {(Version === "12" || Version === "13") && (
        <div className={classname14}>
          <div className={classname17}>
            <Image
              src="img/624380709031626fc14aee84_icon.svg"
              width={200}
              height={200}
              alt="palcehplder"
              className={classname16}
            />
            <Card className={classname2}>
              {tag && <CardTag className={classname3}>{tag}</CardTag>}
              <CardTitle className={classname10}>{title}</CardTitle>
              <CardDescription className={classname4}>
                {description}
              </CardDescription>
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
            </Card>
          </div>
          <div className={classname17}>
            <Image
              src="img/624380709031626fc14aee84_icon.svg"
              width={200}
              height={200}
              alt="palcehplder"
              className={classname16}
            />
            <Card className={classname2}>
              {tag && <CardTag className={classname3}>{tag}</CardTag>}
              <CardTitle className={classname10}>{title}</CardTitle>
              <CardDescription className={classname4}>
                {description}
              </CardDescription>
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
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
