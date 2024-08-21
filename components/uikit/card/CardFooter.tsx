import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function CardFooter({ children }: Props) {
  return <div className="mt-8 mr-0 mb-0 ml-0">{children}</div>;
}
