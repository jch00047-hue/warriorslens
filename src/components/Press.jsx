import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useContent } from "../data/ContentProvider";

const Press = () => {
  const { press } = useContent();
  const items = press.items || [];

  if (!items.length) return null;

  const words = String(press.title || "Coverage & External Use").split(" ");
  const tail = words.pop();
  const head = words.join(" ");

  return (
    <section id="press" className="py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 reveal">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">
                06 / {String(press.eyebrow || "Press").toUpperCase()}
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              {head} <span className="italic font-light text-[#c9a961]">{tail}</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[#bdb6a5] text-base lg:text-lg leading-relaxed">
            {press.subtitle}
          </p>
        </div>

        <ol className="relative reveal">
          {items.map((item, i) => (
            <li key={`${item.url}-${i}`} className="border-t border-white/10 first:border-t-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid lg:grid-cols-12 gap-3 lg:gap-10 py-7 lg:py-8"
              >
                <div className="lg:col-span-3">
                  <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961]">{item.date}</div>
                  <div className="mt-1 font-mono-x text-[11px] tracking-[0.22em] text-[#8a8275] group-hover:text-[#c9a961] transition-colors">
                    {String(item.publication || "").toUpperCase()}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-xl lg:text-2xl leading-snug text-[#f1ecdf] group-hover:text-[#c9a961] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-sm text-[#bdb6a5] leading-relaxed">{item.summary}</p>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end">
                  <ArrowUpRight
                    size={16}
                    className="text-[#5a5446] group-hover:text-[#c9a961] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Press;
