import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: string;
};

export default function ButtonLink({ children }: Props) {
  return (
    <Button variant={"link"} size={"link"}>
      Button{" "}
      <div className="flex flex-col items-center w-4 h-4 justify-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="CurrentColor"
            strokeWidth="1.5"
          ></path>
        </svg>
      </div>
    </Button>
  );
}
