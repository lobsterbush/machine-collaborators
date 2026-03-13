import type { Metadata } from 'next'
import { SessionsClient } from './SessionsClient'

export const metadata: Metadata = {
  title: 'Sessions',
  description: 'Upcoming and past Machine Collaborators sessions on AI in research.',
}

export default function SessionsPage() {
  return <SessionsClient />
}
