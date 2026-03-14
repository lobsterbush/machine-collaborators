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
   GRAIN OVERLAY
   ============================ */

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />
}

/* ============================
   SPLIT TEXT (character reveal)
   ============================ */

interface SplitTextProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  charDelay?: number
}

export function SplitText({ text, className = '', tag: Tag = 'h1', charDelay = 0.03 }: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const chars = text.split('')

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={className}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * charDelay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    </div>
  )
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
