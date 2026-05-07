import React from "react";
import { EXPERIENCE } from "../data/mock";

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 reveal">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">05 / DEPLOYMENT RECORD</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              Service <span className="italic font-light text-[#c9a961]">history.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[#bdb6a5] leading-relaxed">
            Thirteen years across military police, multimedia, and public affairs — from Fort Polk patrols to Combat Camera Team Lead at the theater level.
          </p>
        </div>

        <ol className="relative reveal">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 border-t border-white/10 first:border-t-0 group">
              <div className="lg:col-span-3 flex items-start gap-4">
                <span className="mt-2 inline-block w-2 h-2 bg-[#c9a961] group-hover:scale-150 transition-transform" />
                <span className="font-mono-x text-[12px] tracking-[0.25em] text-[#c9a961]">{e.year}</span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-display text-2xl lg:text-3xl text-[#f1ecdf] tracking-tight">{e.role}</h3>
                <div className="mt-1 text-[#bdb6a5] text-sm">{e.org}</div>
                <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275] mt-2">{e.location.toUpperCase()}</div>
              </div>
              <p className="lg:col-span-4 text-[#bdb6a5] leading-relaxed text-[15px]">{e.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
