export default function QuoteCTA() {
  return (
    <section id="quote" className="relative overflow-hidden py-16 md:py-24">
      {/* ambient glow */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_15%,rgba(66,215,255,0.14),transparent_60%),radial-gradient(55%_45%_at_85%_0%,rgba(255,59,212,0.12),transparent_55%)]" /> */}

      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start">
        {/* left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-neonPink" />
            Quotes by appointment • Kitsap County
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Request a quote
            <span className="text-neonCyan"> (fast response)</span>
          </h2>

          <p className="mt-4 max-w-prose text-white/70">
            Tell us what you’re looking for and how to reach you. We’ll follow
            up with next steps and scheduling.
          </p>

          <div className="mt-6 grid gap-3 text-md text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
              Typical response:{" "}
              <span className="text-white">within 24–48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
              Located on <span className="text-white">Bainbridge Island</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
              Services:{" "}
              <span className="text-white">
                paint • body • restoration • custom
              </span>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />
          <div className="relative rounded-3xl border border-white/10 bg-panel p-6 md:p-7">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" placeholder="Your name" required />
                <Field label="Phone" placeholder="(206) 555-1234" />
              </div>

              <Field label="Email" placeholder="you@email.com" />

              <div className="grid min-w-0 gap-4 md:grid-cols-3">
                <Field label="Year" placeholder="2002" />
                <Field label="Make" placeholder="Toyota" />
                <Field label="Model" placeholder="Tacoma" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Service</label>
                <select className="h-11 rounded-xl border border-white/10 bg-ink/40 px-3 text-sm text-white outline-none focus:border-neonCyan/60">
                  <option>Paint</option>
                  <option>Autobody / Collision</option>
                  <option>Restoration</option>
                  <option>Custom design</option>
                  <option>Mechanical</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-white/80">Project details</label>
                <textarea
                  rows={5}
                  placeholder="What do you want done? Any deadlines or special details?"
                  className="rounded-xl border border-white/10 bg-ink/40 p-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-neonCyan/60"
                />
                <p className="text-xs text-white/50">
                  Photo uploads coming next — for now we’ll follow up for
                  pictures.
                </p>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-neonCyan px-5 text-sm font-semibold text-ink hover:opacity-90"
              >
                Send request
              </button>

              <p className="text-xs text-white/50">
                By submitting, you agree we may contact you about this request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, required }) {
  return (
    <div className="grid min-w-0 gap-2">
      <label className="text-sm text-white/80">
        {label} {required ? <span className="text-neonPink">*</span> : null}
      </label>
      <input
        required={required}
        placeholder={placeholder}
        className="h-11 w-full min-w-0 rounded-xl border border-white/10 bg-ink/40 px-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-neonCyan/60"
      />
    </div>
  );
}
