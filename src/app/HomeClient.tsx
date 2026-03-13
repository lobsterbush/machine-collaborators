'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn, SplitText, Marquee, Stagger, StaggerItem, CountUp } from '@/components/Animated'
import { getNextSession, getUpcomingSessions } from '@/data/sessions'
import { useRef } from 'react'

const marqueeWords = [
  'Workflows', 'Authorship', 'Pedagogy', 'Ethics', 'Evidence',
  'Method', 'Writing', 'Judgment', 'Creativity', 'Practice',
]

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
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ochre/4 rounded-full blur-[120px]" />

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
            <p className="editorial-subhead text-parchment/50 max-w-lg">
              What happens when researchers work with AI.
            </p>
            <div className="flex gap-4">
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-mc-white font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-terracotta-dark transition-colors"
              >
                Subscribe <ArrowRight size={14} />
              </Link>
              <Link
                href="/sessions"
                className="inline-flex items-center gap-2 px-8 py-4 border border-parchment/30 text-parchment font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-parchment hover:text-ink transition-colors"
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

      {/* ========== MARQUEE ========== */}
      <Marquee className="py-6 bg-ink border-t border-parchment/10" speed={25}>
        <div className="flex items-center gap-8 px-4">
          {marqueeWords.map((word, i) => (
            <span key={i} className="font-serif text-2xl md:text-3xl italic text-parchment/30 whitespace-nowrap">
              {word}
              <span className="inline-block w-2 h-2 rounded-full bg-terracotta/40 mx-8 align-middle" />
            </span>
          ))}
        </div>
      </Marquee>

      {/* ========== WHAT IS THIS — FULL WIDTH ========== */}
      <section className="py-28 md:py-40">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label text-terracotta mb-12">About</p>
          </FadeIn>
          <div className="mc-container-narrow !px-0">
            <FadeIn delay={0.1}>
              <p className="editorial-body-lg mb-10">
                Machine Collaborators is a global conversation series where researchers share how they are actually using AI in research, writing, teaching, and academic life.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="editorial-body-lg mb-10">
                Every two weeks, we host an open conversation. No polished keynotes. No vendor demos. Just scholars talking honestly about what works, what doesn&apos;t, and what questions keep emerging.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-serif text-2xl md:text-3xl italic text-ink/70 leading-relaxed">
                This isn&apos;t about hype or panic. It&apos;s about examining what this relationship actually looks like in scholarly life.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== PULL QUOTE — FULL BLEED TERRACOTTA ========== */}
      <section className="py-24 md:py-36 bg-terracotta">
        <div className="mc-container">
          <FadeIn>
            <blockquote className="max-w-4xl">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-mc-white">
                Not &ldquo;AI is amazing,&rdquo; not &ldquo;AI is evil,&rdquo; but &ldquo;let&apos;s examine what this relationship actually looks like in scholarly life.&rdquo;
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ========== NEXT SESSION — DRAMATIC SPOTLIGHT ========== */}
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
                Register <ArrowRight size={14} />
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
                text="On the Horizon"
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
                  <div className="py-8 md:py-10 border-b border-ink/8 flex items-start gap-6 md:gap-10">
                    {/* Big number */}
                    <span className="font-serif text-6xl md:text-8xl font-bold text-ink/[0.06] leading-none flex-shrink-0 w-20 md:w-28">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-2">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">
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
            <p className="editorial-label text-terracotta mb-6">How It Works</p>
            <h2 className="editorial-headline text-parchment">Three principles.</h2>
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-16" staggerDelay={0.15}>
            {[
              {
                number: 1,
                title: 'Open & Global',
                body: 'Free, on Zoom, every two weeks. Anyone in the world can join — faculty, graduate students, postdocs, practitioners.',
              },
              {
                number: 2,
                title: 'Conversation, Not Lecture',
                body: 'Short presentations followed by real discussion. We want honest accounts of practice, not rehearsed talks.',
              },
              {
                number: 3,
                title: 'Intellectually Serious',
                body: 'We treat AI as a research question, not just a tool. Authorship, method, pedagogy, evidence, and ethics are all on the table.',
              },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <div>
                  <CountUp
                    target={item.number}
                    className="font-serif text-7xl md:text-9xl font-bold text-parchment/[0.08] block mb-4 leading-none"
                    duration={1.5}
                    prefix="0"
                  />
                  <h3 className="font-serif text-2xl font-bold text-parchment mb-4">
                    {item.title}
                  </h3>
                  <p className="text-parchment/60 text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ========== SECOND PULL QUOTE ========== */}
      <section className="py-24 md:py-36">
        <div className="mc-container">
          <FadeIn>
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-3xl md:text-5xl font-normal leading-[1.2] text-ink">
                What does it mean to work with these systems as part of knowledge production?
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ========== CONVENER — ASYMMETRIC ========== */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <FadeIn direction="left">
                <p className="editorial-label text-terracotta mb-6">Convener</p>
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
                  Machine Collaborators grows from a conviction that how scholars engage with AI tools matters — and that we should examine these practices openly.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/about"
                    className="editorial-label text-terracotta hover-line inline-flex items-center gap-2"
                  >
                    More <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/nominate"
                    className="editorial-label text-ink hover-line inline-flex items-center gap-2"
                  >
                    Nominate a Speaker <ArrowRight size={12} />
                  </Link>
                </div>
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
              Don&apos;t miss a<br />conversation.
            </h2>
            <p className="text-parchment/50 text-lg max-w-lg mb-12">
              Session announcements with the topic, speaker, and Zoom link. That&apos;s it.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-3 px-10 py-5 bg-terracotta text-mc-white font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:bg-terracotta-dark transition-colors"
            >
              Subscribe <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
