import React from "react";
type Props = {
  children: React.ReactNode;
  className: string;
};

export default function ModuleHeadOverlay({ className, children }: Props) {
  return (
    <div
      className={`absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[-1] bg-black/20 ${className}`}
    >
      <div
        className={`absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[1] bg-black/50 ${className}`}
      ></div>
      {children}
    </div>
  );
}
