function handleHomeLinkClick() {
  if (window.location.hash === '') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" onClick={handleHomeLinkClick} className="flex items-center gap-3">
          <img src="/ria-arch-logo.png" alt="RIA Arch" className="h-10 w-auto rounded-sm" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <a href="#services" className="transition hover:text-navy-900">
            Services
          </a>
          <a href="#process" className="transition hover:text-navy-900">
            Method
          </a>
          <a href="#benefits" className="transition hover:text-navy-900">
            Benefits
          </a>
          <a href="#/about" className="transition hover:text-navy-900">
            About
          </a>
          <a href="#contact" className="transition hover:text-navy-900">
            Contact
          </a>
        </nav>
        <a
          href="https://calendar.app.google/QqGMUy2DgtSY9tQk7"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-gold-200 transition hover:bg-navy-900"
        >
          Start Your Transition
        </a>
      </div>
    </header>
  )
}
