import type { Metadata } from 'next'
import { NominateClient } from './NominateClient'

export const metadata: Metadata = {
  title: 'Speak',
  description:
    'Nominate yourself or someone else to speak at a Machine Collaborators session.',
}

export default function NominatePage() {
  return <NominateClient />
}
