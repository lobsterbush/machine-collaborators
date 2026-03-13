export interface Session {
  id: string
  title: string
  speaker: string
  affiliation: string
  date: string // ISO 8601
  description: string
  status: 'upcoming' | 'past'
  registrationUrl?: string
  recordingUrl?: string
  slidesUrl?: string
}

export const sessions: Session[] = [
  {
    id: 'session-001',
    title: 'How I Actually Use AI in My Research',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-04-10T10:00:00Z',
    description:
      'Practitioner lightning talks: researchers share their real workflows, tools, and lessons learned from integrating AI into their daily research practice.',
    status: 'upcoming',
  },
  {
    id: 'session-002',
    title: 'Authorship and Attribution When Your Co-Author Is a Model',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-04-24T10:00:00Z',
    description:
      'Who gets credit when AI contributes to a paper? We explore the evolving norms around authorship, disclosure, and intellectual contribution.',
    status: 'upcoming',
  },
  {
    id: 'session-003',
    title: 'AI in the Classroom: Pedagogy, Not Policing',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-05-08T10:00:00Z',
    description:
      'Moving beyond detection and prohibition. How can instructors design courses that use AI as a pedagogical tool rather than an adversary?',
    status: 'upcoming',
  },
  {
    id: 'session-004',
    title: 'Prompt Engineering for Social Scientists',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-05-22T10:00:00Z',
    description:
      'Practical strategies for getting useful output from language models in qualitative coding, survey design, literature reviews, and data analysis.',
    status: 'upcoming',
  },
  {
    id: 'session-005',
    title: 'When AI Gets It Wrong: Failures, Hallucinations, and What We Learn',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-06-05T10:00:00Z',
    description:
      'Case studies of AI failures in research contexts. What do breakdowns reveal about the limits of these tools and our reliance on them?',
    status: 'upcoming',
  },
  {
    id: 'session-006',
    title: 'Writing with AI: Process, Ethics, and Quality',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-06-19T10:00:00Z',
    description:
      'From drafting to revision to polishing: when does AI assistance enhance scholarly writing, and when does it erode it?',
    status: 'upcoming',
  },
]

export function getUpcomingSessions(): Session[] {
  return sessions
    .filter((s) => s.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getPastSessions(): Session[] {
  return sessions
    .filter((s) => s.status === 'past')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNextSession(): Session | undefined {
  return getUpcomingSessions()[0]
}
