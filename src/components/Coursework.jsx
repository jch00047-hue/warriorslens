import React, { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { useContent } from "../data/ContentProvider";
import { media } from "../data/content";

const extensionOf = (file) => {
  const ext = String(file || "").split(".").pop();
  return ext && ext !== file ? ext.toUpperCase() : "FILE";
};

const Coursework = () => {
  const { coursework } = useContent();
  const [active, setActive] = useState("All");

  const filters = coursework.filters || ["All"];
  const items = useMemo(() => coursework.items || [], [coursework.items]);

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((it) => it.tag === active)),
    [active, items]
  );

  if (!items.length) return null;

  const words = String(coursework.title || "Accelerated BS+MS Coursework").split(" ");
  const tail = words.pop();
  const head = words.join(" ");

  return (
    <section id="coursework" className="py-24 lg:py-32 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-10 reveal">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">
                07 / {String(coursework.eyebrow || "Academic").toUpperCase()}
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              {head} <span className="italic font-light text-[#c9a961]">{tail}</span>
            </h2>
            {coursework.subtitle && (
              <p className="mt-5 font-display text-[#c9a961] text-lg tracking-[0.06em]">{coursework.subtitle}</p>
            )}
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[#bdb6a5] leading-relaxed text-[15px]">
            {coursework.body}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-y border-white/10 mb-10 reveal">
          {(coursework.courses || []).map((c, i) => (
            <div
              key={c.code}
              className={`py-6 px-5 ${i !== 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} border-white/10`}
            >
              <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">{c.code}</div>
              <div className="font-display text-base lg:text-lg text-[#f1ecdf] mt-2 leading-snug">{c.title}</div>
              <div className="text-sm text-[#bdb6a5] mt-1">{c.instructor}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono-x text-[11px] tracking-[0.25em] px-4 h-9 border transition-colors ${
                active === f
                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                  : "text-[#bdb6a5] border-white/15 hover:border-[#c9a961] hover:text-[#c9a961]"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
          <span className="ml-auto font-mono-x text-[10px] tracking-[0.25em] text-[#5a5446]">
            {visible.length} ITEMS
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 reveal">
          {visible.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#0c0c0c] p-6 lg:p-8 hover:bg-[#101010] transition-colors"
            >
              <div className="flex items-center justify-between font-mono-x text-[10px] tracking-[0.25em]">
                <span className="text-[#c9a961]">{item.course}</span>
                <span className="text-[#5a5446]">{item.unit}</span>
              </div>
              <h3 className="mt-4 font-display text-xl lg:text-2xl leading-snug text-[#f1ecdf] tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[#bdb6a5] leading-relaxed">{item.summary}</p>
              {item.file && (
                <a
                  href={media(item.file)}
                  download
                  className="mt-6 inline-flex items-center gap-2 font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961] hover:text-[#d8b86b] transition-colors"
                >
                  DOWNLOAD {extensionOf(item.file)} <Download size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
