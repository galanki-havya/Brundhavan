import React from "react";

export default function GlobalBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F9FAFB]">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}