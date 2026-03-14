'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, RefreshCw } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from '@/components/Animated'

interface FeedItem {
  title: string
  link: string
  source: string
  pubDate: string
  description: string
}

const FEEDS = [
  {
    label: 'AI & Social Science',
    url: 'https://news.google.com/rss/search?q=%22artificial+intelligence%22+%22social+science%22&hl=en-US&gl=US&ceid=US:en',
  },
  {
    label: 'AI & Academic Research',
    url: 'https://news.google.com/rss/search?q=AI+%22academic+research%22+OR+%22higher+education%22&hl=en-US&gl=US&ceid=US:en',
  },
  {
    label: 'LLMs & Research Methods',
    url: 'https://news.google.com/rss/search?q=%22large+language+model%22+research+methods&hl=en-US&gl=US&ceid=US:en',
  },
]

const PROXY = 'https://api.allorigins.win/raw?url='

function extractSource(title: string): { cleanTitle: string; source: string } {
  const match = title.match(/^(.*)\s-\s([^-]+)$/)
  if (match) {
    return { cleanTitle: match[1].trim(), source: match[2].trim() }
  }
  return { cleanTitle: title, source: '' }
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return ''
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours < 1) return 'Just now'
    if (diffHours < 24) return `${diffHours}h ago`
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 7) return `${diffDays}d ago`
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  } catch {
    return ''
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
}

async function fetchFeed(feedUrl: string): Promise<FeedItem[]> {
  try {
    const res = await fetch(PROXY + encodeURIComponent(feedUrl))
    if (!res.ok) return []
    const text = await res.text()
    const parser = new DOMParser()
    const xml = parser.parseFromString(text, 'text/xml')
    const items = xml.querySelectorAll('item')
    const results: FeedItem[] = []

    items.forEach((item) => {
      const rawTitle = item.querySelector('title')?.textContent || ''
      const { cleanTitle, source } = extractSource(rawTitle)
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      const desc = item.querySelector('description')?.textContent || ''

      results.push({
        title: cleanTitle,
        link,
        source,
        pubDate,
        description: stripHtml(desc).slice(0, 200),
      })
    })

    return results
  } catch {
    return []
  }
}

function deduplicateByTitle(items: FeedItem[]): FeedItem[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = item.title.toLowerCase().slice(0, 60)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function ReadingClient() {
  const [items, setItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function loadFeeds() {
    setLoading(true)
    setError(false)
    try {
      const allResults = await Promise.all(FEEDS.map((f) => fetchFeed(f.url)))
      const merged = allResults.flat()
      merged.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      const deduped = deduplicateByTitle(merged)
      setItems(deduped.slice(0, 40))
      if (deduped.length === 0) setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFeeds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section className="pt-28 pb-12">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label mb-4">Reading</p>
            <h1 className="editorial-headline mb-6">
              AI in Social Science
            </h1>
            <hr className="editorial-rule-accent mb-8" />
            <p className="editorial-body max-w-2xl mb-4">
              Recent coverage of artificial intelligence in social science research, higher education, and academic practice. Aggregated from public sources and updated on each visit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mc-container">
          {loading && (
            <div className="py-20 text-center">
              <RefreshCw size={24} className="animate-spin text-warm-gray mx-auto mb-4" />
              <p className="editorial-caption">Loading feeds&hellip;</p>
            </div>
          )}

          {error && !loading && (
            <div className="py-20 text-center">
              <p className="editorial-subhead text-warm-gray mb-4">
                Could not load feeds.
              </p>
              <button
                onClick={loadFeeds}
                className="editorial-label text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && items.length > 0 && (
            <Stagger className="space-y-0" staggerDelay={0.04}>
              {items.map((item, i) => (
                <StaggerItem key={`${item.link}-${i}`}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-6 md:py-8 border-b border-ink/8 transition-all duration-200 hover:pl-2"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-lg md:text-xl font-bold text-ink leading-tight group-hover:text-terracotta transition-colors">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-warm-gray text-sm leading-relaxed mt-2 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 md:text-right">
                        {item.source && (
                          <span className="text-xs font-semibold text-warm-gray-light uppercase tracking-wider">
                            {item.source}
                          </span>
                        )}
                        {item.pubDate && (
                          <span className="text-xs text-warm-gray-light">
                            {formatDate(item.pubDate)}
                          </span>
                        )}
                        <ExternalLink size={14} className="text-warm-gray-light opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="mt-12 pt-8 border-t border-ink/8">
              <p className="editorial-caption">
                Sources: Google News RSS. Results filtered for relevance to AI in academic and social science contexts. Links open in a new tab.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
