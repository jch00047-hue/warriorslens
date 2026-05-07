import React from "react";
import { CAPABILITIES } from "../data/mock";
import { ArrowRight } from "lucide-react";

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 reveal">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">03 / CAPABILITIES</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              Visual support, <span className="italic font-light text-[#c9a961]">end‑to‑end.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[#bdb6a5] text-base lg:text-lg leading-relaxed">
            Every deliverable is shaped by an Integrated Marketing Communications framework — ensuring photo, video, and graphics align with theater themes and command messaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 reveal">
          {CAPABILITIES.map((c) => (
            <div key={c.code} className="group bg-[#0c0c0c] p-8 lg:p-10 hover:bg-[#101010] transition-colors">
              <div className="flex items-start justify-between">
                <div className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">{c.code}</div>
                <ArrowRight size={18} className="text-[#5a5446] group-hover:text-[#c9a961] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mt-5 font-display text-3xl lg:text-4xl text-[#f1ecdf] tracking-tight">{c.title}</h3>
              <p className="mt-4 text-[#bdb6a5] leading-relaxed text-[15px] max-w-xl">{c.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {c.items.map((it) => (
                  <li key={it} className="font-mono-x text-[11px] tracking-[0.18em] text-[#8a8275]">
                    <span className="text-[#c9a961] mr-2">—</span>{it.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
