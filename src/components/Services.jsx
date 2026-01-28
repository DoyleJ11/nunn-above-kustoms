import { useState } from "react";

function IconWrench(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 7.5a5.5 5.5 0 0 1-7.9 5L7.6 18a2 2 0 1 1-2.8-2.8l5.5-5.5A5.5 5.5 0 0 1 16.5 3a.75.75 0 0 1 .2 1l-2 2a2 2 0 0 0 2.8 2.8l2-2a.75.75 0 0 1 1 .2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l1.2 4.2L17.5 8 13.2 9.8 12 14l-1.2-4.2L6.5 8l4.3-1.8L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.8 2.7L22.5 16l-2.7 1.3L19 20l-.8-2.7L15.5 16l2.7-1.3L19 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12.5 7.2 7.6A2.5 2.5 0 0 1 9.5 6h5a2.5 2.5 0 0 1 2.3 1.6L19 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 12.5h12a2 2 0 0 1 2 2V17a1 1 0 0 1-1 1h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 18H5a1 1 0 0 1-1-1v-2.5a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 18a1.5 1.5 0 1 0 0 .01M16 18a1.5 1.5 0 1 0 0 .01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l1.7 1.7L15 9.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Autobody repair",
    desc: "Collision repair, fitment, and refinishing with clean lines and correct gaps.",
    icon: IconCar,
  },
  {
    title: "Custom paint",
    desc: "Metalflake, pearls, candies, and modern clears — prepped right so it lasts.",
    icon: IconSpark,
  },
  {
    title: "Restoration",
    desc: "Bring classics back: rust repair, paint correction, and full refresh work.",
    icon: IconShield,
  },
  {
    title: "Custom design",
    desc: "One-off details, accent work, and creative finishes tailored to your vision.",
    icon: IconSpark,
  },
  {
    title: "Refinishing & correction",
    desc: "Respray, blend, wet sand, and polish for a finish that pops in the sun.",
    icon: IconShield,
  },
  {
    title: "General mechanic services",
    desc: "Support work available for local builds — ask what’s realistic for your project.",
    icon: IconWrench,
  },
];

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-5">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-neonCyan/10 blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-neonPink/10 blur-2xl" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neonCyan">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-white">{s.title}</h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>

        <div className="mt-5">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            Get a quote <span className="text-white/40">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const mobileServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50">
              SERVICES
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Work that looks right up close
            </h2>
            <p className="mt-3 max-w-prose text-sm text-white/70">
              Specializing in paint, body, restoration, and custom finishes for
              Kitsap County — by appointment.
            </p>
          </div>

          <a
            href="#quote"
            className="hidden rounded-full bg-neonCyan px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90 md:inline-flex"
          >
            Request a quote
          </a>
        </div>

        <div className="mt-10 sm:hidden">
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <div key={s.title} className="w-[86%] shrink-0">
                <ServiceCard s={s} />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-white/50">
            <span>Swipe for more</span>
            <span className="text-white/30">→</span>
          </div>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>

        {/* <div className="mt-10 grid gap-4 sm:hidden">
          {mobileServices.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            {showAll ? "Show less" : "Show all services"}
          </button>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div> */}

        {/* Trust row */}
        <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-white">
              Local & appointment-based
            </div>
            <div className="mt-1 text-sm text-white/70">
              Bainbridge Island • serving Kitsap County.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              Clear expectations
            </div>
            <div className="mt-1 text-sm text-white/70">
              You’ll get a realistic scope, timeline, and finish plan.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              Craftsmanship first
            </div>
            <div className="mt-1 text-sm text-white/70">
              Prep, fitment, and detail — not shortcuts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
