'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/Animated'
import { motion, AnimatePresence } from 'framer-motion'

export function SubscribeClient() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [affiliation, setAffiliation] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: integrate with email service (Resend, Formspree, etc.)
    // For now, just show success state
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-28 pb-24 min-h-[70vh]">
        <div className="mc-container max-w-2xl">
          <FadeIn>
            <p className="editorial-label mb-4">Subscribe</p>
            <h1 className="editorial-headline mb-6">
              Stay in the Loop
            </h1>
            <hr className="editorial-rule-accent mb-8" />
            <p className="editorial-body mb-12">
              Get notified when new sessions are announced. No spam — just the
              topic, speaker, date, and Zoom link, delivered to your inbox every
              two weeks.
            </p>
          </FadeIn>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider"
                  >
                    Email <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@university.edu"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                  />
                </div>

                {/* Affiliation */}
                <div>
                  <label
                    htmlFor="affiliation"
                    className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider"
                  >
                    Affiliation <span className="text-warm-gray-light">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    placeholder="University or organization"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors"
                  >
                    Subscribe <ArrowRight size={16} />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-sage" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-ink mb-4">
                  You&apos;re In
                </h2>
                <p className="editorial-body max-w-md mx-auto">
                  Thanks for subscribing. You&apos;ll receive session announcements at{' '}
                  <strong>{email}</strong>. See you in the conversation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
