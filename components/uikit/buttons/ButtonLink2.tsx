import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonLink2({ children }: Props) {
  return (
    <Button variant={"link2"} size={"link2"}>
      <a href="#">{children}</a>
    </Button>
  );
}
