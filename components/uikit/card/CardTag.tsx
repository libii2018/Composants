/**
 * Card component tag
 * @param {string} className Allows adding CSS classes
 * @param {string} children JSX component Image from nextjs/img
 */

import React from "react";

type Props = {
  children: string;
};

export default function CardTag({ children }: Props) {
  return (
    <div className="mt-0 mr-0 mb-4 ml-0">
      <div className="font-semibold">{children}</div>
    </div>
  );
}
