import React from "react";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonLink2 from "../buttons/ButtonLink2";

type Props = {
  btnNameInput: string;
  inputNamePlaceholder: string;
};

export default function Form1({ btnNameInput, inputNamePlaceholder }: Props) {
  return (
    <div className="lg:max-w-[30rem]">
      <form
        action=""
        className="flex flex-col gap-y-3 mb-4 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_max-content] lg:gap-x-4"
      >
        <input
          type="text"
          placeholder={inputNamePlaceholder}
          className="border border-black h-auto min-h-11 mb-0 px-2 py-3 text-base leading-relaxed bg-white text-white"
        />
        <ButtonSubmit>{btnNameInput}</ButtonSubmit>
      </form>
      <div className="text-black text-xs">
        By clicking Sign Up you're confirming that you agree with our{" "}
        <ButtonLink2>Terms and Conditions</ButtonLink2>
      </div>
    </div>
  );
}
