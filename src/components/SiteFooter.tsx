export function SiteFooter() {
  return (
    <footer className="bg-navy-900 px-6 py-14 text-slate-300 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-200">
            Why RIA Arch?
          </h4>
          <a href="#value" className="mt-3 block text-sm text-slate-400 hover:text-gold-200">
            Why RIA Arch?
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-200">Method</h4>
          <a href="#process" className="mt-3 block text-sm text-slate-400 hover:text-gold-200">
            The RIA Arch Method
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-200">Benefits</h4>
          <a href="#benefits" className="mt-3 block text-sm text-slate-400 hover:text-gold-200">
            Transition Outcomes
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-200">About</h4>
          <a href="#/about" className="mt-3 block text-sm text-slate-400 hover:text-gold-200">
            Founder Bios
          </a>
        </div>
      </div>
    </footer>
  )
}
