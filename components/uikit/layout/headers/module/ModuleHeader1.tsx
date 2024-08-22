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
import React from "react";

type Props = {
  Version: string;
  tag: string;
  title: string;
  description: string;
  btnName1: string;
  btnName2: string;
  btnNameInput: string;
  inputNamePlaceholder: string;
  btnType: number;
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
  }
  return (
    <div className={classname1}>
      <Card className={classname2}>
        <div>
          {tag && <CardTag>{tag}</CardTag>}
          <CardTitle className="">{title}</CardTitle>
        </div>
        <div className={classname3}>
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
    </div>
  );
}
