import heroImg from "../assets/photos/slide_04.jpg";

export default function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(66,215,255,0.16),transparent_60%),radial-gradient(50%_40%_at_80%_0%,rgba(255,59,212,0.12),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-neonCyan" />
            Kitsap County • By appointment
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Custom paint, bodywork, and restorations —
            <span className="text-neonCyan"> done right.</span>
          </h1>

          <p className="mt-4 max-w-prose text-base text-white/70">
            From collision repair to one-off custom designs. Local
            craftsmanship, obsessive detail, and a finish that looks unreal in
            the sun.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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

          <div className="mt-7 grid grid-cols-3 gap-4 text-xs text-white/60">
            <div>
              <div className="text-white">Autobody</div>
              <div>Repair + refinishing</div>
            </div>
            <div>
              <div className="text-white">Paint</div>
              <div>Custom finishes</div>
            </div>
            <div>
              <div className="text-white">Restoration</div>
              <div>Revive classics</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />

          <div className="group relative overflow-hidden rounded-3xl p-[1px]">
            <div className="absolute inset-[-1000%] animate-border-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[conic-gradient(from_0deg,transparent_0_300deg,#0ea5e9_340deg,#a855f7_355deg,transparent_360deg)] blur-2xl"></div>
            <div className="absolute inset-[-1000%] animate-border-spin opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[conic-gradient(from_0deg,transparent_0_300deg,#0ea5e9_340deg,#a855f7_355deg,transparent_360deg)]"></div>
            <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] border border-white/10 bg-panel">
              <img
                src={heroImg}
                alt="Featured build"
                className="h-[340px] w-full object-cover md:h-[420px] p-[1px] rounded-3xl"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" /> */}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Featured build
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
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
