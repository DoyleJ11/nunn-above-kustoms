import logo from "../assets/brand/logo.jpg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Nunn Above Kustoms"
            className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              Nunn Above Kustoms
            </div>
            <div className="text-xs text-white/60">
              Bainbridge Island • Kitsap County
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
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

          <a
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/15"
          >
            Request a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
