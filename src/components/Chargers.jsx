import React, { useState } from "react";
import { CHARGERS } from "../data/mock";

const Chargers = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? CHARGERS.images : CHARGERS.images.slice(0, 8);

  return (
    <section
      id="chargers"
      className="border-t border-[var(--border)] bg-[var(--bg)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              {CHARGERS.eyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
              {CHARGERS.title}
            </h2>

            <p className="mt-3 text-sm text-[var(--muted)] md:text-base">
              {CHARGERS.subtitle}
            </p>

            <p
              className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base"
              dangerouslySetInnerHTML={{ __html: CHARGERS.heading }}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {CHARGERS.meta.map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-[var(--border)] bg-black/5 px-4 py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.k}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text)] md:text-base">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
          <img
            src={CHARGERS.hero}
            alt={CHARGERS.title}
            className="h-[340px] w-full object-cover md:h-[520px]"
            loading="eager"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CHARGERS.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--border)] bg-black/5 px-4 py-5"
            >
              <div className="text-2xl font-semibold text-[var(--text)] md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          {CHARGERS.body.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-sm leading-7 text-[var(--muted)] md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-black/5"
            >
              <img
                src={src}
                alt={`Chargers 2021 frame ${index + 1}`}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {CHARGERS.images.length > 8 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-black/5"
            >
              {expanded ? "Show less" : "View all photos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chargers;