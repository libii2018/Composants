import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonSecondary({ children }: Props) {
  return (
    <Button variant={"secondary"} size={"secondary"}>
      {children}
    </Button>
  );
}
