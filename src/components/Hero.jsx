import heroBefore from "../assets/photos/hero_before.jpg";
import heroAfter from "../assets/photos/hero_after.jpg";

export default function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(66,215,255,0.16),transparent_60%),radial-gradient(50%_40%_at_80%_0%,rgba(255,59,212,0.12),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:gap-10 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-neonCyan" />
            Kitsap County • By appointment
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Paint repair, bodywork, and restorations —
            <span className="text-neonCyan"> done right.</span>
          </h1>

          <p className="mt-4 max-w-prose text-base text-white/70 md:text-lg">
            From quick scratch repairs to one-off custom designs, and from basic
            troubleshooting to full mechanical rebuilds — whether it's your daily
            driver or your pride-and-joy classic, we'll have your vehicle running
            right and looking unreal in the sun.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 md:mt-7">
            <a
              href="#quote"
              className="rounded-full bg-neonCyan px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
            >
              Request a quote
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              View work
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-white/60 md:mt-7">
            <div>
              <div className="text-white">Autobody</div>
              <div>Collision repair + refinishing</div>
            </div>
            <div>
              <div className="text-white">Paint</div>
              <div>Chip repair + custom finishes</div>
            </div>
            <div>
              <div className="text-white">Restoration</div>
              {/* TODO(owner Q5): confirm whether to replace or append "Revive classics" — full phrase "Aftermarket mechanical and electrical installations" is long for this small tab */}
              <div>Aftermarket mechanical & electrical installs</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />

          <div className="group relative overflow-hidden rounded-3xl p-[1px]">
            <div className="absolute inset-[-1000%] animate-border-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[conic-gradient(from_0deg,transparent_0_300deg,#0ea5e9_340deg,#a855f7_355deg,transparent_360deg)] blur-2xl"></div>
            <div className="absolute inset-[-1000%] animate-border-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[conic-gradient(from_0deg,transparent_0_300deg,#0ea5e9_340deg,#a855f7_355deg,transparent_360deg)]"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/10 bg-panel">
              {/* Before / after stack (raw shots, styled labels). Halves are
                  aspect-driven (8/5) so most of each photo stays visible;
                  object-position biases the crop toward the car. */}
              <div className="grid gap-[2px] p-[1px]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
                  <img
                    src={heroBefore}
                    alt="Ford Explorer before body repair and paint correction"
                    className="h-full w-full object-cover object-[center_55%]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-b-3xl">
                  <img
                    src={heroAfter}
                    alt="Ford Explorer after body repair and paint correction"
                    className="h-full w-full object-cover object-[center_62%]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-neonCyan/90 px-3 py-1 text-xs font-semibold text-ink">
                    After
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/70">
                <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                  Body repair + paint correction
                </span>
                <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                  Bainbridge Island, WA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
