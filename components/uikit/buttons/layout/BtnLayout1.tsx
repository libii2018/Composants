import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function BtnLayout1({ children }: Props) {
  return <div className="flex items-center gap-4">{children}</div>;
}
