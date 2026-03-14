'use client'

import { useState } from 'react'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { FadeIn } from '@/components/Animated'
import { motion, AnimatePresence } from 'framer-motion'
import { config, formspreeEndpoint } from '@/config'

export function SubscribeClient() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [affiliation, setAffiliation] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(formspreeEndpoint(config.formspree.subscribeFormId), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          affiliation: affiliation || 'Not provided',
          _subject: `New MC subscriber: ${name}`,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-28 pb-24 min-h-[70vh]">
        <div className="mc-container max-w-2xl">
          <FadeIn>
            <p className="editorial-label mb-4">Subscribe</p>
            <h1 className="editorial-headline mb-6">
              Session Announcements
            </h1>
            <hr className="editorial-rule-accent mb-8" />
            <p className="editorial-body mb-12">
              Bi-weekly email with the next session&apos;s topic, speaker, and Zoom link. Nothing else.
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

                {/* Error */}
                {error && (
                  <div className="flex items-start gap-3 py-3 text-terracotta">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-10 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting…' : 'Subscribe'} {!submitting && <ArrowRight size={16} />}
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
                  Subscribed
                </h2>
                <p className="editorial-body max-w-md mx-auto">
                  Session announcements will go to <strong>{email}</strong>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
