import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
  className: string;
};

export default function ButtonSubmit({ className, children }: Props) {
  return (
    <Button className={className} variant={"submit"} size={"submit"} asChild>
      <input type="submit" value={children} />
    </Button>
  );
}
