import type { Metadata } from 'next'
import { SubscribeClient } from './SubscribeClient'

export const metadata: Metadata = {
  title: 'Subscribe',
  description:
    'Get notified about upcoming Machine Collaborators sessions.',
}

export default function SubscribePage() {
  return <SubscribeClient />
}
