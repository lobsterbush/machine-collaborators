'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/Animated'

export function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12">
        <div className="mc-container">
          <FadeIn>
            <p className="editorial-label mb-4">About</p>
            <h1 className="editorial-headline mb-6 max-w-3xl">
              Why This Series Exists
            </h1>
            <hr className="editorial-rule-accent" />
          </FadeIn>
        </div>
      </section>

      {/* Manifesto */}
      <section className="pb-24">
        <div className="mc-container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-4">
              <FadeIn direction="left" className="sticky top-24">
                <p className="editorial-label mb-4">The Premise</p>
                <hr className="editorial-rule-accent mb-6" />
                <p className="editorial-caption">
                  Researchers are already working with AI. Machine Collaborators creates space to talk about it honestly.
                </p>
              </FadeIn>
            </div>

            {/* Main content */}
            <div className="md:col-span-8 space-y-8">
              <FadeIn delay={0.1}>
                <p className="editorial-body">
                  AI is reshaping how scholars write, analyze, code, teach, and think.
                  But the conversations about it tend to cluster at extremes — breathless
                  enthusiasm or existential dread. Neither is especially useful for
                  researchers trying to do their work well.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="editorial-body">
                  Machine Collaborators starts from a different place: curiosity about
                  practice. What does it actually look like when a political scientist uses
                  a language model to help with qualitative coding? When a historian asks
                  GPT to draft an abstract? When a methods instructor redesigns a syllabus
                  around AI-assisted analysis?
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="editorial-body">
                  We don&apos;t pretend these tools are neutral, and we don&apos;t pretend they&apos;re
                  going away. The interesting questions are in between: What workflows
                  actually work? Where do these tools fail? What are the implications for
                  authorship, evidence, pedagogy, and method?
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <hr className="editorial-rule my-8" />
              </FadeIn>

              <FadeIn delay={0.3}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6">
                  Format
                </h2>
                <p className="editorial-body mb-4">
                  Every two weeks, we meet on Zoom for an open conversation. The format is
                  deliberately informal:
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    'A short presentation (15–20 minutes) on the session topic',
                    'Open discussion and Q&A (30–40 minutes)',
                    'No formal papers required — works in progress, demos, and honest reflections welcome',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta mt-2.5" />
                      <span className="editorial-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.35}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6 mt-12">
                  Who This Is For
                </h2>
                <p className="editorial-body mb-4">
                  Anyone in or adjacent to academic research who is thinking seriously about
                  AI in scholarly practice:
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    'Faculty and researchers across disciplines',
                    'Graduate students and postdocs',
                    'Research staff and data scientists',
                    'University administrators thinking about AI policy',
                    'Anyone curious about what happens when researchers work with AI',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta mt-2.5" />
                      <span className="editorial-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.4}>
                <hr className="editorial-rule my-8" />
              </FadeIn>

              <FadeIn delay={0.45}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6">
                  Convener
                </h2>
                <p className="editorial-body mb-4">
                  <strong>Charles Crabtree</strong> is a Senior Lecturer (Associate Professor) in the School of
                  Social Sciences at Monash University and K-Club Professor at University
                  College, Korea University.
                </p>
                <p className="editorial-body mb-4">
                  He studies how social boundaries — race, ethnicity, class, disability, nationality — get
                  constructed, politicized, and contested, with a focus on measuring discrimination and bias
                  using computational text analysis, machine learning, and large language models alongside
                  experiments. He runs the{' '}
                  <a href="https://needslab.org" target="_blank" rel="noopener noreferrer">
                    Fundamental Needs Lab
                  </a>.
                </p>
                <p className="editorial-body mb-4">
                  His work appears in over 40 journals, including the <em>American Journal of Political Science</em>,{' '}
                  <em>American Political Science Review</em>, <em>British Journal of Political Science</em>,{' '}
                  <em>Journal of Politics</em>, <em>Nature</em>, <em>Nature Human Behavior</em>,{' '}
                  <em>Political Analysis</em>, <em>Public Administration Review</em>, and <em>PNAS</em>.
                  He also writes for public audiences in outlets like <em>The Atlantic</em>,{' '}
                  <em>Foreign Policy</em>, <em>The Diplomat</em>, and <em>South China Morning Post</em>.
                </p>
                <p className="editorial-body mb-4">
                  He serves as Associate Editor at the <em>Australian Journal of Political Science</em>{' '}
                  and is Secretary of the Australian Society for Quantitative Political Science.
                </p>
                <p className="editorial-body mb-8">
                  Machine Collaborators grows from a conviction that how scholars engage with AI tools
                  matters — and that we should examine these practices openly rather than treating them
                  as private shortcuts or guilty secrets.
                </p>
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors"
                >
                  Subscribe <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
