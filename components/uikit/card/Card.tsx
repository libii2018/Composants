import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <div>{children}</div>;
}
