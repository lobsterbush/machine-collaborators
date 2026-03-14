'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn, SplitText, Stagger, StaggerItem } from '@/components/Animated'
import { getNextSession, getUpcomingSessions } from '@/data/sessions'
import { useRef } from 'react'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function HomeClient() {
  const nextSession = getNextSession()
  const upcoming = getUpcomingSessions().slice(0, 6)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <>
      {/* ========== HERO — FULL VIEWPORT DARK ========== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end bg-ink overflow-hidden -mt-16 pb-16 md:pb-24"
      >
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="mc-container relative z-10">
          <motion.p
            className="editorial-label text-terracotta-light mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Global Conversation Series
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              className="editorial-mega text-parchment"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Machine
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              className="editorial-mega text-parchment italic font-normal"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Collaborators
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="editorial-subhead text-parchment max-w-lg">
              What happens when researchers work with AI.
            </p>
            <div className="flex gap-4">
              <Link
                href="/subscribe"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-mc-white font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-terracotta-dark transition-all duration-300"
              >
                Subscribe <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/sessions"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-parchment text-parchment font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-parchment hover:text-ink transition-all duration-300"
              >
                Sessions
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-px h-16 bg-parchment/20"
          initial={{ scaleY: 0, transformOrigin: 'top' }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </section>

      {/* ========== WHAT IS THIS — FULL WIDTH ========== */}
      <section className="py-28 md:py-40">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label text-terracotta mb-12">About</p>
          </FadeIn>
          <div className="mc-container-narrow !px-0">
            <FadeIn delay={0.1}>
              <p className="editorial-body-lg mb-10">
                Researchers are already using AI to write, code, analyze data, and teach. The interesting question is not whether they should, but what happens when they do.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="editorial-body-lg mb-10">
                Machine Collaborators is a bi-weekly conversation series. Every session, a researcher presents how AI has entered their actual practice — then we discuss it openly.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-serif text-2xl md:text-3xl italic text-ink/70 leading-relaxed">
                Not a tech demo. Not a policy debate. A seminar about practice.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== NEXT SESSION ========== */}
      {nextSession && (
        <section className="py-28 md:py-40 bg-cream">
          <div className="mc-container">
            <FadeIn>
              <p className="editorial-label text-terracotta mb-6">Next Session</p>
              <p className="text-sm text-warm-gray mb-12 font-medium">{formatDateLong(nextSession.date)}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <SplitText
                text={nextSession.title}
                className="editorial-display text-ink mb-12"
                tag="h2"
                charDelay={0.02}
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="editorial-body-lg max-w-2xl mb-12">
                {nextSession.description}
              </p>
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-parchment font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-ink-light transition-colors"
              >
                Get the Zoom Link <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ========== UPCOMING — OVERSIZED NUMBERS ========== */}
      <section className="py-28 md:py-40">
        <div className="mc-container">
          <FadeIn className="mb-20">
            <div className="flex items-end justify-between">
              <SplitText
                text="Upcoming"
                className="editorial-headline text-ink"
                tag="h2"
                charDelay={0.025}
              />
              <Link
                href="/sessions"
                className="hidden md:inline-flex items-center gap-2 editorial-label text-terracotta hover-line"
              >
                All Sessions <ArrowRight size={12} />
              </Link>
            </div>
            <hr className="editorial-rule mt-8" />
          </FadeIn>

          <Stagger className="space-y-0" staggerDelay={0.08}>
            {upcoming.map((session, i) => (
              <StaggerItem key={session.id}>
              <Link href="/sessions" className="group block">
                  <div className="py-8 md:py-10 border-b border-ink/8 flex items-start gap-6 md:gap-10 transition-all duration-300 group-hover:pl-4">
                    {/* Big number */}
                    <span className="font-serif text-6xl md:text-8xl font-bold text-ink/[0.06] leading-none flex-shrink-0 w-20 md:w-28 transition-colors duration-300 group-hover:text-terracotta/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-2">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-terracotta transition-colors duration-300 leading-tight">
                          {session.title}
                        </h3>
                        <span className="editorial-label text-warm-gray-light flex-shrink-0">
                          {formatDate(session.date)}
                        </span>
                      </div>
                      <p className="text-warm-gray text-sm md:text-base leading-relaxed line-clamp-2">
                        {session.description}
                      </p>
                    </div>
                    {/* Arrow that appears on hover */}
                    <span className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0 text-terracotta">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-8 md:hidden">
            <Link
              href="/sessions"
              className="editorial-label text-terracotta hover-line inline-flex items-center gap-2"
            >
              All Sessions <ArrowRight size={12} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== FORMAT — BIG NUMBERS, INK BACKGROUND ========== */}
      <section className="py-28 md:py-40 bg-ink text-parchment">
        <div className="mc-container">
          <FadeIn className="mb-20">
            <p className="editorial-label text-ochre mb-6">Format</p>
            <h2 className="editorial-headline text-parchment">How sessions run.</h2>
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-16" staggerDelay={0.15}>
            {[
              {
                number: 1,
                title: 'Open',
                body: 'Free, on Zoom, bi-weekly. Open to faculty, graduate students, postdocs, and research staff worldwide.',
              },
              {
                number: 2,
                title: 'Practitioner-Led',
                body: 'A short presentation on a real workflow or experience, followed by open discussion. No rehearsed keynotes.',
              },
              {
                number: 3,
                title: 'Substantive',
                body: 'We treat AI as a subject of inquiry, not just an instrument. Authorship, method, evidence, pedagogy — all in scope.',
              },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <div className="group cursor-default">
                  <span className="font-serif text-7xl md:text-9xl font-bold text-parchment/[0.08] block mb-4 leading-none transition-colors duration-500 group-hover:text-terracotta/20">
                    0{item.number}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-parchment mb-4 transition-colors duration-300 group-hover:text-terracotta-light">
                    {item.title}
                  </h3>
                  <p className="text-parchment/80 text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ========== SECOND PULL QUOTE ========== */}
      <section className="py-24 md:py-36 bg-sage-light">
        <div className="mc-container">
          <FadeIn>
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-3xl md:text-5xl font-normal leading-[1.2] text-ink">
                What changes when a language model becomes part of the research process?
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ========== SPEAK — CALL FOR SPEAKERS ========== */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-7">
              <FadeIn>
                <p className="editorial-label text-ochre mb-6">Speak</p>
                <h2 className="editorial-headline text-ink mb-8">
                  Present your work.
                </h2>
                <p className="text-warm-gray-dark text-lg leading-relaxed mb-6">
                  We&apos;re looking for researchers with firsthand experience — a workflow that worked, one that didn&apos;t, a methodological question you&apos;re still sorting out.
                </p>
                <p className="text-warm-gray-dark text-lg leading-relaxed mb-10">
                  Nominate yourself or suggest a colleague.
                </p>
                <Link
                  href="/nominate"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-ink text-parchment font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-ink-light transition-all duration-300"
                >
                  Nominate a Speaker <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  {[
                    'AI in research workflows',
                    'Writing with AI',
                    'Authorship & attribution',
                    'AI failures & limitations',
                    'Pedagogy & teaching',
                    'Computational methods',
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="group/tag flex items-center gap-3 py-3 border-b border-ink/10 cursor-default"
                    >
                      <span className="w-2 h-2 rounded-full bg-ochre/40 transition-colors duration-300 group-hover/tag:bg-ochre" />
                      <span className="font-serif text-lg text-warm-gray transition-colors duration-300 group-hover/tag:text-ink">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONVENER — ASYMMETRIC ========== */}
      <section className="py-28 md:py-40">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <FadeIn direction="left">
                <p className="editorial-label text-sage mb-6">Convener</p>
                <h2 className="editorial-headline text-ink mb-8">Charles Crabtree</h2>
                <hr className="editorial-rule-accent" />
              </FadeIn>
            </div>
            <div className="md:col-span-7">
              <FadeIn delay={0.2}>
                <p className="editorial-body-lg mb-6">
                  Senior Lecturer (Associate Professor), School of Social Sciences, Monash University and K-Club Professor, University College, Korea University.
                </p>
                <p className="editorial-body mb-6">
                  Social scientist studying how social boundaries, identity, and conflict shape political behavior — using AI and computational methods to measure and reduce discrimination across societies. His work appears in over 40 journals, including the <em>American Journal of Political Science</em>, <em>American Political Science Review</em>, <em>Nature</em>, <em>Nature Human Behavior</em>, and <em>PNAS</em>.
                </p>
                <p className="editorial-body mb-10">
                  This series started from a simple observation: researchers are using these tools, but rarely discussing how — at least not in public.
                </p>
                <Link
                  href="/about"
                  className="editorial-label text-terracotta hover-line inline-flex items-center gap-2"
                >
                  More <ArrowRight size={12} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA — MASSIVE TYPE ========== */}
      <section className="py-28 md:py-40 bg-ink">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label text-terracotta mb-10">Join</p>
            <h2 className="editorial-display text-parchment mb-8">
              Get session<br />announcements.
            </h2>
            <p className="text-parchment/80 text-lg max-w-lg mb-12">
              Topic, speaker, date, and Zoom link. Bi-weekly. Nothing else.
            </p>
              <Link
                href="/subscribe"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-terracotta text-mc-white font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-terracotta-dark transition-all duration-300 hover:gap-5"
              >
                Subscribe <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
