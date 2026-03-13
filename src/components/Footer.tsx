import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-ink text-parchment/70">
      <div className="mc-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-parchment">
              Machine Collaborators
            </h3>
            <p className="text-sm leading-relaxed text-parchment/60">
              A global conversation series on what happens when researchers work with AI.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/sessions" className="text-sm text-parchment/70 hover:text-parchment transition-colors">
                Sessions
              </Link>
              <Link href="/about" className="text-sm text-parchment/70 hover:text-parchment transition-colors">
                About
              </Link>
              <Link href="/subscribe" className="text-sm text-parchment/70 hover:text-parchment transition-colors">
                Subscribe
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Convener
            </p>
            <p className="text-sm leading-relaxed text-parchment/70">
              Charles Crabtree
              <br />
              Senior Lecturer, School of Social Sciences
              <br />
              Monash University
            </p>
            <p className="text-sm text-parchment/50">
              K-Club Professor, University College, Korea University
            </p>
          </div>
        </div>

        <hr className="my-10 border-parchment/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment/40">
          <p>&copy; {new Date().getFullYear()} Machine Collaborators</p>
          <p>
            Built with intention, not just automation.
          </p>
        </div>
      </div>
    </footer>
  )
}
