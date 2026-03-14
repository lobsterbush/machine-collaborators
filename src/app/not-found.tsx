import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="pt-28 pb-24 min-h-[70vh] flex items-center">
      <div className="mc-container">
        <p className="editorial-label text-terracotta mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-6">
          Page not found.
        </h1>
        <p className="editorial-body max-w-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-parchment font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-ink-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
