import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useContent } from "../data/ContentProvider";
import { media, paragraphsOf } from "../data/content";

const formatDate = (value) => {
  if (!value) return "";
  const [y, m, d] = String(value).slice(0, 10).split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return String(value);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

const Journal = () => {
  const { journal } = useContent();
  const [open, setOpen] = useState(null);
  const posts = useMemo(() => journal.posts || [], [journal.posts]);

  // Legacy /posts/*.html links land on #post-<slug>
  useEffect(() => {
    const sync = () => {
      const match = /^#post-(.+)$/.exec(window.location.hash);
      if (!match) return;
      const post = posts.find((p) => p.slug === match[1]);
      if (post) setOpen(post);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [posts]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!posts.length) return null;

  return (
    <section id="journal" className="py-24 lg:py-32 bg-[#0c0c0c] border-y border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 reveal">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">09 / FIELD NOTES</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              Field <span className="italic font-light text-[#c9a961]">notes.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[#bdb6a5] text-base lg:text-lg leading-relaxed">
            Gear decisions, field craft, and lessons from the mission — written between assignments, without sponsored unboxings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 reveal">
          {posts.map((post) => (
            <button
              key={post.slug}
              onClick={() => setOpen(post)}
              className="group flex flex-col bg-[#0c0c0c] text-left hover:bg-[#101010] transition-colors"
            >
              <span className="relative block aspect-[16/10] overflow-hidden bg-[#141414]">
                <img
                  src={media(post.image)}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover cine-img"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center h-6 px-2 bg-[#0a0a0a]/70 font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961]">
                  {String(post.category || "").toUpperCase()}
                </span>
              </span>
              <span className="flex flex-1 flex-col p-6 lg:p-8">
                <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">{formatDate(post.date)}</span>
                <span className="mt-3 font-display text-2xl lg:text-3xl leading-tight text-[#f1ecdf] group-hover:text-[#c9a961] transition-colors">
                  {post.title}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-[#bdb6a5]">{post.dek}</span>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961]">
                  READ ESSAY <ArrowUpRight size={14} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-[#0a0a0a]/95 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpen(null)}
        >
          <div className="min-h-full flex items-start justify-center p-4 lg:p-8">
            <article
              className="relative w-full max-w-3xl bg-[#0c0c0c] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-11 h-11 grid place-items-center border border-white/20 bg-[#0a0a0a]/70 text-[#e9e3d6] hover:text-[#c9a961] hover:border-[#c9a961]"
                onClick={() => setOpen(null)}
                aria-label="close"
              >
                <X size={18} />
              </button>

              {open.image && (
                <img src={media(open.image)} alt={open.title} className="w-full max-h-[420px] object-cover" />
              )}

              <div className="p-6 lg:p-10">
                <div className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">
                  {String(open.category || "").toUpperCase()} &bull; {formatDate(open.date)}
                </div>
                <h3 className="mt-4 font-display text-3xl lg:text-4xl leading-tight text-[#f1ecdf] tracking-tight">{open.title}</h3>
                <p className="mt-4 text-[#bdb6a5] leading-relaxed">{open.dek}</p>
                {open.caption && (
                  <p className="mt-3 font-mono-x text-[10px] tracking-[0.2em] text-[#5a5446]">{open.caption}</p>
                )}

                <div className="mt-8 space-y-5 text-[#bdb6a5] leading-[1.75]">
                  {paragraphsOf(open).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {Array.isArray(open.references) && open.references.length > 0 && (
                  <div className="mt-10 border-t border-white/10 pt-6">
                    <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#8a8275] mb-3">REFERENCES</div>
                    <ul className="space-y-2 text-sm">
                      {open.references.map((ref, i) => (
                        <li key={i}>
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#bdb6a5] hover:text-[#c9a961] link-underline"
                          >
                            {ref.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default Journal;
