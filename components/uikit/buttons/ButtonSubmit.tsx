import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonSubmit({ children }: Props) {
  return (
    <Button variant={"submit"} size={"submit"} asChild>
      <input type="submit" value={children} />
    </Button>
  );
}
