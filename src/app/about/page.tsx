import type { Metadata } from 'next'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'What Machine Collaborators is, why it exists, and who it is for.',
}

export default function AboutPage() {
  return <AboutClient />
}
