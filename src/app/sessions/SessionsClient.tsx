'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ExternalLink, Play } from 'lucide-react'
import { FadeIn } from '@/components/Animated'
import { getUpcomingSessions, getPastSessions, type Session } from '@/data/sessions'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function SessionRow({ session }: { session: Session }) {
  return (
    <div className="group py-10 border-b border-ink/10 last:border-b-0 transition-all duration-300 hover:bg-ink/[0.02] hover:px-4">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Date column */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 text-warm-gray mb-2">
            <Calendar size={14} />
            <span className="text-sm font-medium">{formatDate(session.date)}</span>
            {session.time && (
              <span className="text-xs text-warm-gray-light">· {session.time}</span>
            )}
          </div>
          {session.speaker !== 'TBA' && (
            <p className="text-sm font-semibold text-ink">
              {session.speaker}
              {session.affiliation && (
                <span className="text-warm-gray font-normal block">{session.affiliation}</span>
              )}
            </p>
          )}
          {session.speaker === 'TBA' && (
            <p className="text-sm text-warm-gray-light italic">Speaker TBA</p>
          )}
        </div>

        {/* Content column */}
        <div className="md:col-span-9">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-4 group-hover:text-terracotta transition-colors">
            {session.title}
          </h3>
          <p className="editorial-body max-w-2xl mb-6">
            {session.description}
          </p>

          {/* Links for past sessions */}
          {session.status === 'past' && (
            <div className="flex gap-4">
              {session.recordingUrl && (
                <a
                  href={session.recordingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark uppercase tracking-wider"
                >
                  <Play size={14} /> Watch Recording
                </a>
              )}
              {session.slidesUrl && (
                <a
                  href={session.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark uppercase tracking-wider"
                >
                  <ExternalLink size={14} /> Slides
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SessionsClient() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')
  const upcoming = getUpcomingSessions()
  const past = getPastSessions()
  const sessions = tab === 'upcoming' ? upcoming : past

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label mb-4">Sessions</p>
            <h1 className="editorial-headline mb-6">
              {tab === 'upcoming' ? 'What\u2019s Coming' : 'Archive'}
            </h1>
            <hr className="editorial-rule-accent mb-8" />
          </FadeIn>

          {/* Toggle */}
          <div className="flex gap-1 bg-ink/5 p-1 rounded-sm w-fit">
            {(['upcoming', 'past'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all ${
                  tab === t
                    ? 'bg-ink text-parchment'
                    : 'text-warm-gray hover:text-ink'
                }`}
              >
                {t === 'upcoming' ? `Upcoming (${upcoming.length})` : `Past (${past.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions list */}
      <section className="pb-24">
        <div className="mc-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {sessions.length > 0 ? (
                <div>
                  {sessions.map((session) => (
                    <SessionRow key={session.id} session={session} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="editorial-subhead text-warm-gray">
                    {tab === 'upcoming'
                      ? 'No upcoming sessions scheduled yet.'
                      : 'No past sessions to show yet.'}
                  </p>
                  <p className="editorial-body mt-4">
                    {tab === 'upcoming'
                      ? 'Check back soon or subscribe to get notified.'
                      : 'The series is just getting started.'}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
