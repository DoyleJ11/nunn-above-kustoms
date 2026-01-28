import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function OwnerChip({
  name = "Jack Elliott Nunn",
  subtitle = "Owner & Designer",
  photoSrc = null,
}) {
  const [open, setOpen] = useState(false);
  const chipRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent body scroll when modal open (nice on mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <span className="inline-flex align-middle" ref={chipRef}>
      {/* Inline chip */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-base font-semibold text-white/90 hover:bg-white/10"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="relative h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/10">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="block h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(66,215,255,.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,59,212,.25),transparent_60%)]" />
          )}
        </span>

        <span className="whitespace-nowrap">{name}</span>
        <span className="text-white/40 transition group-hover:text-white/60">
          ▾
        </span>
      </button>

      {/* Modal */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} profile`}
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-label="Close"
            />

            {/* Modal content */}
            <div className="relative mx-auto flex h-full max-w-md items-center justify-center px-4">
              {/* Glow atmosphere */}
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute left-10 top-24 h-44 w-44 rounded-full bg-neonCyan/10 blur-3xl" />
                <div className="absolute right-10 bottom-24 h-44 w-44 rounded-full bg-neonPink/10 blur-3xl" />
              </div>

              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  {/* Portrait */}
                  {photoSrc ? (
                    <img
                      src={photoSrc}
                      alt={name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(66,215,255,.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,59,212,.18),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,.06),rgba(0,0,0,.0))]" />
                  )}

                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/75" />

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink/60 text-white/80 backdrop-blur hover:bg-ink/70 hover:text-white"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  {/* Glass nameplate */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                      <div className="text-xl font-semibold leading-tight text-white">
                        {name}
                      </div>
                      <div className="mt-0.5 text-sm text-white/70">
                        {subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tiny footer hint (optional) */}
                <div className="flex items-center justify-between px-4 py-3 text-xs text-white/50">
                  <span>Tap outside to close</span>
                  <span>Esc</span>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </span>
  );
}
