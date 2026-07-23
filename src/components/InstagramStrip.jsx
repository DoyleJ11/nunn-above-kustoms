import ig01 from "../assets/photos/instagram_01.jpg";
import ig02 from "../assets/photos/instagram_02.jpg";
import ig05 from "../assets/photos/instagram_05.jpg";
import ig06 from "../assets/photos/instagram_06.jpg";
import wiresBefore from "../assets/photos/wires_before.jpg";
import wiresAfter from "../assets/photos/wires_after.jpg";
import buickBefore from "../assets/photos/buick_before.jpg";
import buickAfter from "../assets/photos/buick_after.jpg";

const igUrl = "https://www.instagram.com/nunnabovekustoms/";

// Owner-supplied Instagram tiles. Pair tiles ({before, after}) render as a
// split before/after square instead of a single image.
const tiles = [
  { src: ig01, alt: "Custom truck at the Laredo Drive-In" },
  { src: ig02, alt: "Painted red steel wheels" },
  { src: ig05, alt: "Rat rod roadster project" },
  { src: ig06, alt: "Hot rod frame in the shop" },
    {
    before: wiresBefore,
    after: wiresAfter,
    alt: "Gauge cluster wiring before and after reorganizing",
  },
  {
    before: buickBefore,
    after: buickAfter,
    alt: "Grease Lightning Buick before and after paint",
  },
];

export default function InstagramStrip() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50">
              INSTAGRAM
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              @nunnabovekustoms
            </h3>
            <p className="mt-3 max-w-prose text-sm text-white/70">
              More builds, progress shots, and fresh finishes.
            </p>
          </div>

          <a
            href={igUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
          >
            Follow on Instagram
          </a>
        </div>

        {/* 4-col grid: before/after pairs span 2 columns so each half gets a
            full square instead of a narrow sliver. */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href={igUrl}
              target="_blank"
              rel="noreferrer"
              className={[
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-panel",
                t.before ? "col-span-2" : "",
              ].join(" ")}
              aria-label="Open Instagram profile"
            >
              {t.before ? (
                <div className="grid grid-cols-2 gap-[2px]">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={t.before}
                      alt={`${t.alt} — before`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-ink/70 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={t.after}
                      alt={`${t.alt} — after`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 rounded-full bg-neonCyan/90 px-2.5 py-0.5 text-[10px] font-semibold text-ink">
                      After
                    </span>
                  </div>
                </div>
              ) : (
                <img
                  src={t.src}
                  alt={t.alt}
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-ink/60 px-2 py-1 text-[11px] font-semibold text-white/80 backdrop-blur opacity-0 transition group-hover:opacity-100">
                View on IG →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
