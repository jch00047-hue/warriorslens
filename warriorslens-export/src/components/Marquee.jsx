import React from "react";
import { CLIENT_LOGOS } from "../data/mock";

const Marquee = () => {
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-y border-white/5 bg-[#0a0a0a] overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-12 mx-12 font-display tracking-[0.3em] text-[#5a5446] text-lg">
            <span>{c}</span>
            <span className="text-[#c9a961]">✕</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
