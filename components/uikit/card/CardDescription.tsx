import React from "react";
type Props = {
  children: string;
  className: string;
};

export default function CardDescription({ className, children }: Props) {
  return (
    <div className={className}>
      <p className="text-lg">{children}</p>
    </div>
  );
}
