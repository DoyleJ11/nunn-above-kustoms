import slide01 from "../assets/photos/slide_01.jpg";
import slide02 from "../assets/photos/slide_02.jpg";
import slide03 from "../assets/photos/slide_03.jpg";
import slide04 from "../assets/photos/slide_04.jpg";
import slide05 from "../assets/photos/slide_05.jpg";
import slide06 from "../assets/photos/slide_06.jpg";

const igUrl = "https://www.instagram.com/nunnabovekustoms/";

const tiles = [
  { src: slide04, alt: "Custom car build photo 1" },
  { src: slide01, alt: "Custom car build photo 2" },
  { src: slide02, alt: "Custom paint detail photo 1" },
  { src: slide03, alt: "Custom paint detail photo 2" },
  { src: slide05, alt: "Custom paint detail photo 3" },
  { src: slide06, alt: "Custom finish photo" },
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

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <a
              key={i}
              href={igUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel"
              aria-label="Open Instagram profile"
            >
              <img
                src={t.src}
                alt={t.alt}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/80 opacity-0 transition group-hover:opacity-100">
                View on IG →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
