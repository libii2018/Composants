import React from "react";

type Props = {
  children: string;
};

export default function CardTitle({ children }: Props) {
  return (
    <div className="mt-0 mr-0 mb-4 ml-0">
      <h2 className="leading-tight font-semibold text-4xl lg:text-5xl lg:font-bold">
        {children}
      </h2>
    </div>
  );
}
