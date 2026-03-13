'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Calendar } from 'lucide-react'
import { FadeIn, TextReveal, Stagger, StaggerItem } from '@/components/Animated'
import { getNextSession, getUpcomingSessions } from '@/data/sessions'

const pullQuotes = [
  'Not "AI is amazing," not "AI is evil," but "let\'s examine what this relationship actually looks like in scholarly life."',
  'The workflows, gains, failures, and new questions that emerge.',
  'What does it mean to work with these systems as part of knowledge production?',
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function HomeClient() {
  const nextSession = getNextSession()
  const upcoming = getUpcomingSessions().slice(0, 4)

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-terracotta/8 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-[5%] w-80 h-80 bg-ochre/6 rounded-full blur-3xl" />

        <div className="mc-container relative z-10">
          <div className="max-w-4xl">
            <motion.p
              className="editorial-label mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              A Global Conversation Series
            </motion.p>

            <motion.h1
              className="editorial-display mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Machine
              <br />
              Collaborators
            </motion.h1>

            <motion.p
              className="editorial-subhead max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              What happens when researchers work with AI: the workflows, gains, failures, and new questions that emerge.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest rounded-none hover:bg-terracotta-dark transition-colors"
              >
                Get Notified <ArrowRight size={16} />
              </Link>
              <Link
                href="/sessions"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink text-ink font-sans font-semibold text-sm uppercase tracking-widest rounded-none hover:bg-ink hover:text-parchment transition-colors"
              >
                View Sessions
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-warm-gray-light" />
        </motion.div>
      </section>

      {/* ========== EDITORIAL RULE ========== */}
      <div className="mc-container">
        <hr className="editorial-rule" />
      </div>

      {/* ========== WHAT IS THIS ========== */}
      <section className="py-24 md:py-32">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <FadeIn direction="left">
                <p className="editorial-label mb-4">About the Series</p>
                <hr className="editorial-rule-accent" />
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={0.2}>
                <p className="editorial-body max-w-2xl mb-8">
                  Machine Collaborators is a global conversation series where researchers share how they are actually using AI in research, writing, teaching, and academic life.
                </p>
                <p className="editorial-body max-w-2xl mb-8">
                  Every two weeks, we host an open conversation. No polished keynotes. No vendor demos. Just scholars talking honestly about what works, what doesn&apos;t, and what questions keep emerging.
                </p>
                <p className="editorial-body max-w-2xl">
                  This isn&apos;t about hype or panic. It&apos;s about examining what this relationship actually looks like in scholarly life.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PULL QUOTE ========== */}
      <section className="py-20 bg-ink">
        <div className="mc-container">
          <FadeIn>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-4xl font-normal leading-snug text-parchment/90 italic">
                &ldquo;{pullQuotes[0]}&rdquo;
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ========== NEXT SESSION SPOTLIGHT ========== */}
      {nextSession && (
        <section className="py-24 md:py-32 bg-cream">
          <div className="mc-container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <FadeIn direction="left">
                  <p className="editorial-label mb-4">Next Session</p>
                  <hr className="editorial-rule-accent" />
                  <div className="mt-6 flex items-center gap-2 text-warm-gray">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{formatDate(nextSession.date)}</span>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-8">
                <FadeIn delay={0.2}>
                  <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-6">
                    {nextSession.title}
                  </h2>
                  <p className="editorial-body max-w-2xl mb-8">
                    {nextSession.description}
                  </p>
                  {nextSession.speaker !== 'TBA' && (
                    <p className="text-sm font-semibold text-ink mb-8">
                      {nextSession.speaker}
                      {nextSession.affiliation && (
                        <span className="text-warm-gray font-normal"> — {nextSession.affiliation}</span>
                      )}
                    </p>
                  )}
                  <Link
                    href="/subscribe"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors"
                  >
                    Register <ArrowRight size={16} />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== UPCOMING SESSIONS GRID ========== */}
      <section className="py-24 md:py-32">
        <div className="mc-container">
          <FadeIn className="mb-16">
            <div className="flex items-end justify-between">
              <div>
                <p className="editorial-label mb-4">Upcoming</p>
                <TextReveal
                  text="On the Horizon"
                  className="editorial-headline"
                  tag="h2"
                />
              </div>
              <Link
                href="/sessions"
                className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark uppercase tracking-wider"
              >
                All Sessions <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <Stagger className="space-y-0">
            {upcoming.map((session, i) => (
              <StaggerItem key={session.id}>
                <div className="group py-8 border-b border-ink/10 last:border-b-0">
                  <div className="grid md:grid-cols-12 gap-4 items-baseline">
                    <div className="md:col-span-2">
                      <p className="text-sm text-warm-gray font-medium">
                        {formatDate(session.date)}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">
                        {session.title}
                      </h3>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <p className="text-sm text-warm-gray">
                        {session.speaker !== 'TBA' ? session.speaker : 'Speaker TBA'}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-10 md:hidden">
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta uppercase tracking-wider"
            >
              All Sessions <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== SECOND PULL QUOTE ========== */}
      <section className="py-16">
        <div className="mc-container">
          <FadeIn>
            <hr className="editorial-rule mb-16" />
            <blockquote className="max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl font-normal leading-snug text-ink/80 italic">
                &ldquo;{pullQuotes[2]}&rdquo;
              </p>
            </blockquote>
            <hr className="editorial-rule mt-16" />
          </FadeIn>
        </div>
      </section>

      {/* ========== FORMAT ========== */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mc-container">
          <FadeIn className="mb-16">
            <p className="editorial-label mb-4">How It Works</p>
            <hr className="editorial-rule-accent" />
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Open & Global',
                body: 'Free, on Zoom, every two weeks. Anyone in the world can join — faculty, graduate students, postdocs, practitioners.',
              },
              {
                number: '02',
                title: 'Conversation, Not Lecture',
                body: 'Short presentations followed by real discussion. We want honest accounts of practice, not rehearsed talks.',
              },
              {
                number: '03',
                title: 'Intellectually Serious',
                body: 'We treat AI as a research question, not just a tool. Authorship, method, pedagogy, evidence, and ethics are all on the table.',
              },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <div>
                  <p className="font-serif text-5xl font-bold text-ink/10 mb-4">
                    {item.number}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="editorial-body">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ========== ORGANIZER ========== */}
      <section className="py-24 md:py-32">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <FadeIn direction="left">
                <p className="editorial-label mb-4">Organizer</p>
                <hr className="editorial-rule-accent" />
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                  Charles Crabtree
                </h2>
                <p className="editorial-body max-w-2xl mb-4">
                  Senior Lecturer, School of Social Sciences, Monash University and K-Club Professor, University College, Korea University.
                </p>
                <p className="editorial-body max-w-2xl mb-8">
                  Research interests include intergroup relations, conflict, and the politics of representation. Machine Collaborators grows from a conviction that how scholars engage with AI tools matters — and that we should talk about it openly.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark uppercase tracking-wider"
                >
                  More About This Project <ArrowRight size={14} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 md:py-32 bg-ink">
        <div className="mc-container text-center">
          <FadeIn>
            <p className="editorial-label text-terracotta mb-6">Join the Conversation</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
              Subscribe to hear about
              <br />
              upcoming sessions.
            </h2>
            <p className="text-lg text-parchment/60 max-w-xl mx-auto mb-10">
              No spam, just session announcements with the topic, speaker, and Zoom link.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 px-10 py-5 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors"
            >
              Subscribe <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
