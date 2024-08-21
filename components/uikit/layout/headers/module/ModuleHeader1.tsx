import ButtonLink from "@/components/uikit/buttons/ButtonLink";
import ButtonSecondary from "@/components/uikit/buttons/ButtonSecondary";
import BtnLayout1 from "@/components/uikit/buttons/layout/BtnLayout1";
import Card from "@/components/uikit/card/Card";
import CardDescription from "@/components/uikit/card/CardDescription";
import CardFooter from "@/components/uikit/card/CardFooter";
import CardTag from "@/components/uikit/card/CardTag";
import CardTitle from "@/components/uikit/card/CardTitle";
import Form1 from "@/components/uikit/forms/Form1";
import React from "react";

type Props = {
  orientation: string;
  tag: string;
  title: string;
  description: string;
  btnName1: string;
  btnName2: string;
  btnNameInput: string;
  inputNamePlaceholder: string;
};

export default function ModuleHeader1({
  orientation,
  tag,
  title,
  description,
  btnName1,
  btnName2,
  btnNameInput,
  inputNamePlaceholder,
}: Props) {
  let classname1: string = "";
  let classname2: string = "";
  let classname3: string = "";
  let classname4: string = "";
  let classname5: string = "";
  let classname6: string = "";
  if (orientation === "verticale") {
    classname1 = "flex flex-col";
  } else if (orientation === "horizontal") {
    classname1 = "w-full max-w-[80rem] mx-auto py-12";
    classname2 = "flex flex-col gap-y-5 lg:flex-row lg:gap-x-20";
    classname3 = "lg:flex lg:flex-col";
    classname6 = "";
  } else if (orientation === "vertion3") {
    classname2 = "text-center max-w-[48rem] margin-auto";
    classname1 = "flex flex-col gap-y-12 justify-center items-center";
    classname6 = "justify-center";
  }
  return (
    <div className="pl-[5%]">
      <div className={classname1}>
        <Card className={classname2}>
          <div>
            {tag && <CardTag>{tag}</CardTag>}
            <CardTitle className={classname2}>{title}</CardTitle>
          </div>
          <div className={classname3}>
            <CardDescription className={classname4}>
              {description}
            </CardDescription>
            <CardFooter className={classname5}>
              {btnName1 && btnName2 && (
                <BtnLayout1 className={classname6}>
                  <ButtonSecondary>{btnName1}</ButtonSecondary>
                  <ButtonLink>{btnName2}</ButtonLink>
                </BtnLayout1>
              )}
              {btnNameInput && inputNamePlaceholder && (
                <Form1
                  btnNameInput={btnNameInput}
                  inputNamePlaceholder={inputNamePlaceholder}
                />
              )}
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
