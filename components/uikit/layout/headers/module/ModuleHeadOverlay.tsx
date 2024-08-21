import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function ModuleHeadOverlay({ children }: Props) {
  return (
    <div className="absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[-1] bg-black/20">
      <div className="absolute top-[0%] left-[0%] right-[0%] bottom-[0%] z-[1] bg-black/50"></div>
      {children}
    </div>
  );
}
