import React from "react";
import bgImage from "../assets/backgrounds/bg-premium.jpg";

export default function GlobalBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFFFF]">

      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Soft Premium Overlay */}
      <div className="fixed inset-0 -z-10 bg-white/92 backdrop-blur-[1px]" />

      {/* Luxury Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-[#f8f8f8]/30" />

      {/* Website Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}