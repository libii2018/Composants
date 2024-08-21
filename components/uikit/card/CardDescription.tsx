import React from "react";
type Props = {
  children: string;
};

export default function CardDescription({ children }: Props) {
  return (
    <div>
      <p className="text-lg">{children}</p>
    </div>
  );
}
