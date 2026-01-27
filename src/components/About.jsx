const influences = [
  "Early Chicano car culture",
  "Big Daddy Roth",
  "Gene Winfield",
  "George Barris",
  "Giorgetto Giugiaro",
  "Marcello Gandini",
  "Harley J. Earl",
];

export default function About() {
  return (
    <section id="about" className="bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/50">
            ABOUT
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Built on art, trained in craft
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            <span className="text-white">Nunn Above Kustoms</span> specializes
            in autobody, paint refinishing, restoration, and custom design —
            with a signature focus on metalflake finishes for bumpers, roofs,
            and custom parts.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Owner & designer{" "}
            <span className="text-white">Jack Elliott Nunn</span> holds a B.A.
            in Studio Art (Linfield College) and trained in autobody & collision
            repair at Clover Park Technical College. His first build — a 1969 VW
            Beetle turned Volksrod — set the tone: craftsmanship, creativity,
            and obsessive detail.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">Philosophy</p>
          <p className="mt-2 text-sm text-white/70">
            Attention to detail — and a finish that satisfies the client.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-panel p-5">
            <div className="text-sm font-semibold text-white">Specialties</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Autobody repair + refinishing</li>
              <li>• Custom paint (metalflake, pearls, clears)</li>
              <li>• Restoration work</li>
              <li>• Custom design + detail work</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-panel p-5">
            <div className="text-sm font-semibold text-white">Training</div>
            <div className="mt-3 text-sm text-white/70">
              <div>• B.A. Studio Art — Linfield College</div>
              <div className="mt-2">
                • Autobody & Collision Repair — Clover Park Technical College
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-panel p-5">
            <div className="text-sm font-semibold text-white">Influences</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {influences.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
