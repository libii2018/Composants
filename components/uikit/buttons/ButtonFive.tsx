import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
  className: string;
};

export default function ButtonFive({ className, children }: Props) {
  return (
    <Button className={className} variant={"five"} size={"five"}>
      {children}
    </Button>
  );
}
