import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonThird({ children }: Props) {
  return (
    <Button variant={"third"} size={"third"}>
      Button
    </Button>
  );
}
