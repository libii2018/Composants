import React from "react";
type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function HeaderGen1({ left, right }: Props) {
  return (
    <div className="px-[5%] py-16 lg:px-0">
      <div className="flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}
