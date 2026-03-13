'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/* ============================
   FADE-IN ON SCROLL
   ============================ */

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ============================
   TEXT REVEAL (word by word)
   ============================ */

interface TextRevealProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextReveal({ text, className = '', tag: Tag = 'h2' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const words = text.split(' ')

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  )
}

/* ============================
   PARALLAX SECTION
   ============================ */

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function Parallax({ children, className = '', speed = 0.3 }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: speed * -50 }}
      viewport={{ once: false }}
      transition={{ type: 'tween', ease: 'linear' }}
    >
      {children}
    </motion.div>
  )
}

/* ============================
   GRAIN OVERLAY
   ============================ */

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />
}

/* ============================
   STAGGER CHILDREN
   ============================ */

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function Stagger({ children, className = '', staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
