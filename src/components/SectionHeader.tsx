type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  const alignClass = centered ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`${alignClass} mb-10 max-w-3xl`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-navy-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
