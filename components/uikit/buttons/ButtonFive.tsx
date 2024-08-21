import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonFive({ children }: Props) {
  return (
    <Button variant={"five"} size={"five"}>
      Button
    </Button>
  );
}
