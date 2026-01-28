import { useEffect, useMemo, useState } from "react";

import slide01 from "../assets/photos/slide_01.jpg";
import slide02 from "../assets/photos/slide_02.jpg";
import slide03 from "../assets/photos/slide_03.jpg";
import slide04 from "../assets/photos/slide_04.jpg";
import slide05 from "../assets/photos/slide_05.jpg";
import slide06 from "../assets/photos/slide_06.jpg";

const photos = [
  { src: slide04, title: "Nissan GTR R32", tag: "Featured build" },
  { src: slide01, title: "Custom finish", tag: "Paint" },
  { src: slide02, title: "Metalflake / sparkle", tag: "Detail" },
  { src: slide03, title: "Hand-laid design", tag: "Custom" },
  { src: slide05, title: "Gold flake roof", tag: "Paint" },
  { src: slide06, title: "Sun hit", tag: "Finish" },
];

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeaturedWork() {
  const items = useMemo(() => photos, []);
  const [openIndex, setOpenIndex] = useState(null);

  const isOpen = openIndex !== null;
  const active = isOpen ? items[openIndex] : null;

  // ESC closes modal
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight" && isOpen) {
        setOpenIndex((i) => (i + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && isOpen) {
        setOpenIndex((i) => (i - 1 + items.length) % items.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, items.length]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <section id="work" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50">
              SELECTED WORK
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Recent builds & finishes
            </h2>
            <p className="mt-3 max-w-prose text-sm text-white/70">
              A small sample of restorations, paint, and custom detail work from
              the shop.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
          >
            Start your project
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => {
            const isFeatured = idx === 0;
            return (
              <button
                key={p.src}
                type="button"
                onClick={() => setOpenIndex(idx)}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-panel text-left",
                  "focus:outline-none focus:ring-2 focus:ring-neonCyan/60",
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : "",
                ].join(" ")}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  className={[
                    "h-72 w-full object-cover",
                    isFeatured ? "lg:h-full" : "",
                    "transition duration-300 group-hover:scale-[1.02]",
                  ].join(" ")}
                  loading="lazy"
                />

                {/* darkening gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                      {p.tag}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">
                      {p.title}
                    </div>
                  </div>

                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75 opacity-0 transition group-hover:opacity-100">
                    View
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          onMouseDown={(e) => {
            // clicking the backdrop closes
            if (e.target === e.currentTarget) setOpenIndex(null);
          }}
        >
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-4 py-10">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-panel">
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/55"
                aria-label="Close"
              >
                <IconX className="h-5 w-5" />
              </button>

              <div className="grid gap-0 md:grid-cols-[1fr_320px]">
                <div className="relative bg-black">
                  <img
                    src={active.src}
                    alt={active.title}
                    className="max-h-[75vh] w-full object-contain"
                  />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/75">
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      {active.tag}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      {openIndex + 1} / {items.length}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-white/50">
                      GALLERY
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      {active.title}
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      Want something similar? Send a few photos and a quick
                      description and we’ll tell you what’s realistic and what
                      it’ll take.
                    </p>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          (i) => (i - 1 + items.length) % items.length,
                        )
                      }
                      className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((i) => (i + 1) % items.length)
                      }
                      className="flex-1 rounded-full bg-neonCyan px-4 py-2 text-sm font-semibold text-ink hover:opacity-90"
                    >
                      Next
                    </button>
                  </div>

                  <a
                    href="#quote"
                    onClick={() => setOpenIndex(null)}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Request a quote
                  </a>

                  <div className="text-xs text-white/50">
                    Tip: use ← → keys, Esc to close.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
