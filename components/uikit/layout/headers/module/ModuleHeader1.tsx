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
  tag: string;
  title: string;
  description: string;
  btnName1: string;
  btnName2: string;
  btnNameInput: string;
  inputNamePlaceholder: string;
};

export default function ModuleHeader1({
  tag,
  title,
  description,
  btnName1,
  btnName2,
  btnNameInput,
  inputNamePlaceholder,
}: Props) {
  return (
    <div className="pl-[5%]">
      <div className="flex flex-col">
        <Card>
          {tag && <CardTag>{tag}</CardTag>}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardFooter>
            {btnName1 && btnName2 && (
              <BtnLayout1>
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
        </Card>
      </div>
    </div>
  );
}
