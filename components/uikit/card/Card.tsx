import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Card({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}
