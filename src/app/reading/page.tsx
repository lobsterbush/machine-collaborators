import type { Metadata } from 'next'
import { ReadingClient } from './ReadingClient'

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Recent coverage of AI in social science, academia, and research practice.',
}

export default function ReadingPage() {
  return <ReadingClient />
}
