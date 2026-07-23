import { useEffect, useMemo, useState } from "react";

import international02 from "../assets/photos/international_02.jpg";
import international03 from "../assets/photos/international_03.jpg";
import internationalFront from "../assets/photos/international_front.jpg";
import internationalBefore from "../assets/photos/international_before.jpg";
import corolla01 from "../assets/photos/corolla_01.jpg";
import slide02 from "../assets/photos/slide_02.jpg";
import slide03 from "../assets/photos/slide_03.jpg";
import slide05 from "../assets/photos/slide_05.jpg";
import flakeDash from "../assets/photos/flake_dash.jpg";
import handlaidCover from "../assets/photos/handlaid_cover.jpg";
import handlaid02 from "../assets/photos/handlaid_02.jpg";
import handlaid03 from "../assets/photos/handlaid_03.jpg";
import rustBefore from "../assets/photos/rust_before.jpg";
import rustDuring from "../assets/photos/rust_during.jpg";
import rustAfter from "../assets/photos/rust_after.jpg";
import parts01 from "../assets/photos/parts_01.jpg";
import morrisBefore from "../assets/photos/morris_before.jpg";
import morrisAfter from "../assets/photos/morris_after.jpg";

// Each tile owns its own photo set. The lightbox scrolls within a tile's
// `images` array, so clicking one vehicle shows only that vehicle's photos.
// Images are {src, label?} — label renders a Before/During/After badge in the lightbox.
const photos = [
  {
    title: "Yellow International pickup",
    tag: "Featured build",
    images: [
      { src: international02 },
      { src: internationalFront },
      { src: internationalBefore, label: "Before" },
      { src: international03 },
    ],
    description:
      "This International started life as a brush-fire truck in Montana. Nunn Above's involvement began with repairing holes cut into the fenders to make room for exhaust to pass through the top of the fender. Paint was stripped back to red primer in places, bodyworked, then resprayed Old Cat Yellow and buffed to perfection. All chrome was restored and polished to a mirror finish.",
  },
  {
    title: "Detail work and paint revival",
    tag: "Detail",
    // NOTE: this image still has "Before and after" text baked in — no raw
    // replacement was provided in the wip set. Swap when the owner sends one.
    images: [{ src: corolla01 }],
    description:
      "This 1988 Toyota Corolla is an ongoing project to showcase the craftsmanship and capabilities of Nunn Above Kustoms. See the glimmer that hides beneath faded paint!",
  },
  {
    title: "Metal Flake / Sugar Top",
    tag: "Paint",
    // Per the owner's notes: keep the sparkle photo (slide_02), add the gold roof
    // (slide_05, the old "Gold flake roof" tile) and the black car (slide_03, from
    // the old hand-laid tile), plus the green metalflake dash he sent.
    // Still pending: red car roof photo (owner to send) and a write-up.
    images: [
      { src: slide02 },
      { src: slide05 },
      { src: slide03 },
      { src: flakeDash },
    ],
    description: "",
  },
  {
    title: "Hand-laid designs",
    tag: "Custom",
    // Gold/copper metalflake lace-work roofs (the 1948 Chevy); handlaid_cover is the top-down shot.
    // `wide` spans 2 grid columns (fills the slot vacated by the rust banner below).
    wide: true,
    images: [{ src: handlaidCover }, { src: handlaid02 }, { src: handlaid03 }],
    description:
      "This vehicle is a 1948 Chevy Lowrider whose body was painted by Mullins Enterprises, with the lowrider designs on the roof painted by Nunn Above Kustoms. Total creative liberties were taken to produce this roof — countless hours and over a thousand feet of masking tape.",
  },
  {
    title: "Rust repair",
    tag: "Restoration",
    // `banner` renders as a full-width strip below the grid, showing all three
    // stages side by side without needing to open the lightbox.
    banner: true,
    images: [
      { src: rustBefore, label: "Before" },
      { src: rustDuring, label: "During" },
      { src: rustAfter, label: "After" },
    ],
    description:
      "From mild rust-hole repair to full floor replacement and any other rust-related offences. This project came in for rust repair in the wheel openings on the bed; both the inner and outer wheel wells were replaced and bodyworked.",
  },
  {
    title: "Parts restoration",
    tag: "Parts",
    // `tall` matches the taller row height of the wide hand-laid tile beside it.
    tall: true,
    images: [
      { src: parts01 },
      { src: morrisBefore, label: "Before" },
      { src: morrisAfter, label: "After" },
    ],
    description:
      "Parts seen here are from clients who need refinishing or color-matching done on their vehicle parts. From clearcoating carbon fiber to painting rims or color matching, we can coat any part you have for the application at hand.",
  },
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
  const [photoIndex, setPhotoIndex] = useState(0);

  const isOpen = openIndex !== null;
  const active = isOpen ? items[openIndex] : null;
  const activeImages = active ? active.images : [];
  const hasMultiple = activeImages.length > 1;

  function openItem(idx) {
    setOpenIndex(idx);
    setPhotoIndex(0);
  }

  function nextPhoto() {
    setPhotoIndex((p) => (p + 1) % activeImages.length);
  }

  function prevPhoto() {
    setPhotoIndex((p) => (p - 1 + activeImages.length) % activeImages.length);
  }

  // ESC closes; arrows move within the open item's photos.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        return;
      }
      if (openIndex === null) return;
      const len = items[openIndex].images.length;
      if (len < 2) return;
      if (e.key === "ArrowRight") setPhotoIndex((p) => (p + 1) % len);
      if (e.key === "ArrowLeft") setPhotoIndex((p) => (p - 1 + len) % len);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, items]);

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
              Completed builds and finishes
            </h2>
            <p className="mt-3 max-w-prose text-sm text-white/70">
              A small sample of restoration work, paint correction, custom
              paint, and other detail work from the shop.
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
            if (p.banner) return null;
            const isFeatured = idx === 0;
            return (
              <button
                key={p.title}
                type="button"
                onClick={() => openItem(idx)}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-panel text-left",
                  "focus:outline-none focus:ring-2 focus:ring-neonCyan/60",
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : "",
                  p.wide ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <img
                  src={p.images[0].src}
                  alt={p.title}
                  className={[
                    "h-72 w-full object-cover",
                    isFeatured ? "lg:h-full" : "",
                    // Taller boxes so wide tiles crop less of the photo; `tall`
                    // keeps the neighboring tile's row height in sync.
                    p.wide || p.tall ? "sm:h-96" : "",
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
                    {p.images.length > 1 ? `View ${p.images.length}` : "View"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Full-width banner tiles (all photos visible without opening the lightbox) */}
        {items.map((p, idx) => {
          if (!p.banner) return null;
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => openItem(idx)}
              className="group mt-4 block w-full rounded-3xl border border-white/10 bg-panel p-5 text-left focus:outline-none focus:ring-2 focus:ring-neonCyan/60"
            >
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                    {p.tag}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {p.title}
                  </div>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75 opacity-0 transition group-hover:opacity-100">
                  View {p.images.length}
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {p.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={img.src}
                      alt={`${p.title}${img.label ? ` — ${img.label}` : ""}`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {img.label && (
                      <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        {img.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 max-w-prose text-sm text-white/70">
                {p.description}
              </p>
            </button>
          );
        })}
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
                    src={activeImages[photoIndex].src}
                    alt={active.title}
                    className="max-h-[75vh] w-full object-contain"
                  />

                  {activeImages[photoIndex].label && (
                    <span className="absolute left-3 top-3 rounded-full bg-neonCyan/90 px-3 py-1 text-xs font-semibold text-ink">
                      {activeImages[photoIndex].label}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/75">
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      {active.tag}
                    </span>
                    {hasMultiple && (
                      <span className="rounded-full bg-white/10 px-3 py-1">
                        {photoIndex + 1} / {activeImages.length}
                      </span>
                    )}
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
                    {active.description && (
                      <p className="mt-2 text-sm text-white/70">
                        {active.description}
                      </p>
                    )}
                  </div>

                  {hasMultiple && (
                    <div className="mt-auto flex gap-3">
                      <button
                        type="button"
                        onClick={prevPhoto}
                        className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={nextPhoto}
                        className="flex-1 rounded-full bg-neonCyan px-4 py-2 text-sm font-semibold text-ink hover:opacity-90"
                      >
                        Next
                      </button>
                    </div>
                  )}

                  <a
                    href="#quote"
                    onClick={() => setOpenIndex(null)}
                    className={[
                      "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/10",
                      hasMultiple ? "" : "mt-auto",
                    ].join(" ")}
                  >
                    Request a quote
                  </a>

                  {hasMultiple && (
                    <div className="text-xs text-white/50">
                      Tip: use ← → keys, Esc to close.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
