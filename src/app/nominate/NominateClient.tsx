'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/Animated'
import { motion, AnimatePresence } from 'framer-motion'

const topicAreas = [
  'AI in research workflows',
  'Writing with AI',
  'AI and pedagogy / teaching',
  'Authorship and attribution',
  'Prompt engineering for scholars',
  'AI failures and limitations',
  'Ethics of AI in academia',
  'Computational methods and LLMs',
  'AI policy in universities',
  'Other',
]

export function NominateClient() {
  const [submitted, setSubmitted] = useState(false)
  const [nominationType, setNominationType] = useState<'self' | 'other'>('self')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [topic, setTopic] = useState('')
  const [description, setDescription] = useState('')
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])

  // For nominating someone else
  const [nomineeName, setNomineeName] = useState('')
  const [nomineeEmail, setNomineeEmail] = useState('')
  const [nomineeAffiliation, setNomineeAffiliation] = useState('')

  function toggleArea(area: string) {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: integrate with email service or form backend
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-28 pb-24 min-h-[70vh]">
        <div className="mc-container max-w-2xl">
          <FadeIn>
            <p className="editorial-label mb-4">Speak</p>
            <h1 className="editorial-headline mb-6">
              Nominate a Speaker
            </h1>
            <hr className="editorial-rule-accent mb-8" />
            <p className="editorial-body mb-4">
              Sessions work best when the presenter has direct experience with
              AI in their research, teaching, or writing — something concrete
              to discuss rather than a position to argue.
            </p>
            <p className="editorial-body mb-12">
              Nominate yourself or suggest a colleague. We&apos;ll follow up about
              scheduling and format.
            </p>
          </FadeIn>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Self / Other toggle */}
                <div className="flex gap-1 bg-ink/5 p-1 rounded-sm w-fit mb-10">
                  {([
                    { key: 'self' as const, label: 'Nominate Myself' },
                    { key: 'other' as const, label: 'Suggest Someone' },
                  ]).map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setNominationType(opt.key)}
                      className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all ${
                        nominationType === opt.key
                          ? 'bg-ink text-parchment'
                          : 'text-warm-gray hover:text-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {nominationType === 'self' ? (
                    <>
                      {/* Self nomination fields */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Your Name <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text" id="name" required value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Email <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="email" id="email" required value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@university.edu"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="affiliation" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Affiliation <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text" id="affiliation" required value={affiliation}
                          onChange={(e) => setAffiliation(e.target.value)}
                          placeholder="University or organization"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Other nomination fields */}
                      <div>
                        <label htmlFor="your-name" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Your Name <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text" id="your-name" required value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="your-email" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Your Email <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="email" id="your-email" required value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@university.edu"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>

                      <hr className="editorial-rule my-4" />
                      <p className="editorial-label mb-2">Person You&apos;re Nominating</p>

                      <div>
                        <label htmlFor="nominee-name" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Their Name <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="text" id="nominee-name" required value={nomineeName}
                          onChange={(e) => setNomineeName(e.target.value)}
                          placeholder="Nominee's name"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="nominee-email" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Their Email <span className="text-warm-gray-light">(if known)</span>
                        </label>
                        <input
                          type="email" id="nominee-email" value={nomineeEmail}
                          onChange={(e) => setNomineeEmail(e.target.value)}
                          placeholder="nominee@university.edu"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="nominee-affiliation" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                          Their Affiliation
                        </label>
                        <input
                          type="text" id="nominee-affiliation" value={nomineeAffiliation}
                          onChange={(e) => setNomineeAffiliation(e.target.value)}
                          placeholder="University or organization"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                        />
                      </div>
                    </>
                  )}

                  {/* Shared fields */}
                  <div className="pt-4">
                    <p className="text-sm font-semibold text-ink mb-4 uppercase tracking-wider">
                      Topic Areas <span className="text-warm-gray-light">(select all that apply)</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {topicAreas.map((area) => (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleArea(area)}
                          className={`px-4 py-2 text-sm font-medium border transition-colors ${
                            selectedAreas.includes(area)
                              ? 'bg-ink text-parchment border-ink'
                              : 'bg-transparent text-warm-gray border-ink/20 hover:border-ink/40'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                      Proposed Topic or Title <span className="text-warm-gray-light">(optional)</span>
                    </label>
                    <input
                      type="text" id="topic" value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., How I use LLMs for qualitative coding"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-ink mb-2 uppercase tracking-wider">
                      Brief Description <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={
                        nominationType === 'self'
                          ? "In a few sentences, what would you talk about? What's your experience with AI in your work?"
                          : "Why would this person be a great speaker? What's their experience with AI in research?"
                      }
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 text-ink text-lg placeholder:text-warm-gray-light focus:border-terracotta focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-10 py-4 bg-terracotta text-mc-white font-sans font-semibold text-sm uppercase tracking-widest hover:bg-terracotta-dark transition-colors"
                    >
                      Submit Nomination <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
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
                  Nomination Received
                </h2>
                <p className="editorial-body max-w-md mx-auto">
                  {nominationType === 'self'
                    ? "Received. We'll be in touch about scheduling."
                    : "Received. We'll follow up with them and with you."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
