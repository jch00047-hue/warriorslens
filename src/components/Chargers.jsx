import React, { useState } from "react";
import { CHARGERS } from "../data/mock";

const Chargers = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? CHARGERS.images : CHARGERS.images.slice(0, 6);

  return (
    <section
      id="chargers"
      className="border-t border-[var(--border)] bg-[var(--bg)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {CHARGERS.eyebrow}
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            {CHARGERS.title}
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            {CHARGERS.body[0]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        {CHARGERS.images.length > 6 && (
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