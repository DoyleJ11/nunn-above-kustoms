import logo from "../assets/brand/logo.jpg";

const igUrl = "https://www.instagram.com/nunnabovekustoms/";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Nunn Above Kustoms"
                className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10"
              />
              <div>
                <div className="text-sm font-semibold text-white">
                  Nunn Above Kustoms
                </div>
                <div className="text-xs text-white/60">
                  Bainbridge Island • Kitsap County
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm text-white/70">
              Autobody, paint refinishing, restoration, and custom design —
              appointment-based work for local clients in Kitsap County.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={igUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="#contact"
                className="rounded-full bg-neonCyan px-4 py-2 text-sm font-semibold text-ink hover:opacity-90"
              >
                Request a quote
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-white">Explore</div>
            <nav className="mt-4 grid gap-2 text-sm text-white/70">
              <a className="hover:text-white" href="#work">
                Work
              </a>
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </nav>

            <div className="mt-6 text-xs text-white/50">
              By appointment • Kitsap County only
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <div className="text-white">Phone</div>
                <a className="hover:text-white" href="tel:12067133663">
                  (206) 713-3663
                </a>
                <div className="mt-1">
                  <a className="hover:text-white" href="sms:12067133663">
                    Text this number →
                  </a>
                </div>
              </div>

              <div>
                <div className="text-white">Mail</div>
                <div>P.O. Box 10624</div>
                <div>Bainbridge Island, WA 98110</div>
              </div>

              <div>
                <div className="text-white">Instagram</div>
                <a
                  className="hover:text-white"
                  href={igUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  @nunnabovekustoms
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Nunn Above Kustoms. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <span>Built on Bainbridge Island, WA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
