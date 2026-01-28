export default function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-6 md:p-10">
          {/* subtle neon glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neonCyan/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-neonPink/10 blur-3xl" />
          </div>

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/50">
                CONTACT
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to talk about your build?
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Kitsap County only • by appointment. Share your goal, timeline,
                and a few photos — we’ll tell you what’s realistic.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:12067133663"
                  className="rounded-full bg-neonCyan px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
                >
                  Call (206) 713-3663
                </a>
                <a
                  href="sms:12067133663"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Text
                </a>
                {/* <a href="mailto:..." className="...">Email</a> */}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">
                For queries & appointments
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div>
                  <div className="text-white">Jack Elliott Nunn</div>
                  <div>Owner & Designer</div>
                </div>

                <div>
                  <div className="text-white">Phone</div>
                  <a className="hover:text-white" href="tel:12067133663">
                    (206) 713-3663
                  </a>
                </div>

                <div>
                  <div className="text-white">Mail</div>
                  <div>P.O. Box 10624</div>
                  <div>Bainbridge Island, WA 98110</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
