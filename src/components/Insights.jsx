import React from "react";
import { ArrowRight } from "lucide-react";
import { useContent } from "../data/ContentProvider";

const Insights = () => {
  const { insights } = useContent();
  const campaigns = insights.campaigns || [];
  const advantage = insights.advantage || {};

  if (!campaigns.length) return null;

  const words = String(insights.title || "Campaigns built on evidence.").split(" ");
  const tail = words.pop();
  const head = words.join(" ");

  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 reveal">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">
                08 / {String(insights.eyebrow || "IMC").toUpperCase()}
              </span>
            </div>
            {insights.kicker && (
              <div className="inline-flex items-center h-7 px-3 border border-[#c9a961]/40 text-[#c9a961] font-mono-x text-[10px] tracking-[0.25em] mb-5">
                {String(insights.kicker).toUpperCase()}
              </div>
            )}
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              {head} <span className="italic font-light text-[#c9a961]">{tail}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-[#bdb6a5] text-base lg:text-lg leading-relaxed">
            {insights.intro}
          </p>
        </div>

        <div className="grid gap-px bg-white/10 reveal">
          {campaigns.map((c) => (
            <article key={c.code} className="bg-[#0a0a0a] grid lg:grid-cols-12 gap-8 p-7 lg:p-10">
              <div className="lg:col-span-4">
                <div className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">{c.code}</div>
                <div className="mt-2 font-mono-x text-[10px] tracking-[0.2em] text-[#8a8275] uppercase">{c.course}</div>
                <h3 className="mt-4 font-display text-2xl lg:text-3xl leading-tight text-[#f1ecdf]">{c.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(c.pillars || []).map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center h-7 px-3 border border-[#c9a961]/40 text-[#c9a961] font-mono-x text-[10px] tracking-[0.2em]"
                    >
                      {String(p).toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#8a8275]">OBJECTIVE</div>
                <p className="mt-2 text-[#bdb6a5] leading-relaxed">{c.objective}</p>

                <div className="mt-6 font-mono-x text-[10px] tracking-[0.3em] text-[#8a8275]">KEY DELIVERABLES</div>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {(c.deliverables || []).map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-[#bdb6a5] leading-relaxed">
                      <span className="text-[#c9a961]">—</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-l-2 border-[#c9a961] pl-4">
                  <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#c9a961]">STRATEGIC OUTCOME</div>
                  <p className="mt-2 text-[#e9e3d6] text-sm leading-relaxed">{c.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {advantage.title && (
          <div className="mt-10 border border-[#c9a961]/30 bg-[#0c0c0c] p-8 lg:p-12 grid lg:grid-cols-12 gap-8 reveal">
            <div className="lg:col-span-7">
              <h3 className="font-display text-3xl lg:text-4xl leading-tight text-[#f1ecdf] tracking-tight">
                {advantage.title}
              </h3>
              <p className="mt-4 text-[#bdb6a5] leading-relaxed">{advantage.body}</p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <p className="font-display italic text-xl lg:text-2xl text-[#c9a961] leading-snug">{advantage.cta}</p>
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-4 border border-white/15 hover:border-[#c9a961] transition-colors px-6 py-5"
              >
                <span className="font-display text-lg text-[#f1ecdf] group-hover:text-[#c9a961]">Request support.</span>
                <ArrowRight
                  size={18}
                  className="text-[#5a5446] group-hover:text-[#c9a961] group-hover:translate-x-1 transition-all"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Insights;
