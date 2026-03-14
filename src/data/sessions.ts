export interface Session {
  id: string
  title: string
  speaker: string
  affiliation: string
  date: string // ISO 8601
  time: string // human-readable with timezone, e.g. '10:00 AM UTC'
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
    time: '10:00 AM UTC',
    description:
      'Lightning talks on real workflows. How are researchers actually integrating language models, code assistants, and other AI tools into daily practice?',
    status: 'upcoming',
  },
  {
    id: 'session-002',
    title: 'Authorship and Attribution When Your Co-Author Is a Model',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-04-24T10:00:00Z',
    time: '10:00 AM UTC',
    description:
      'When a model contributes to a paper, who is the author? A discussion of evolving norms around credit, disclosure, and intellectual contribution.',
    status: 'upcoming',
  },
  {
    id: 'session-003',
    title: 'AI in the Classroom',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-05-08T10:00:00Z',
    time: '10:00 AM UTC',
    description:
      'Course design when students have access to generative AI. What changes in assessment, learning objectives, and the role of the instructor?',
    status: 'upcoming',
  },
  {
    id: 'session-004',
    title: 'Prompting as Method',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-05-22T10:00:00Z',
    time: '10:00 AM UTC',
    description:
      'Strategies for getting useful output from language models in qualitative coding, survey design, literature review, and data analysis.',
    status: 'upcoming',
  },
  {
    id: 'session-005',
    title: 'Failures and Hallucinations',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-06-05T10:00:00Z',
    time: '10:00 AM UTC',
    description:
      'Case studies of AI failures in research contexts. What breakdowns reveal about the limits of these tools and our dependence on them.',
    status: 'upcoming',
  },
  {
    id: 'session-006',
    title: 'Writing with AI',
    speaker: 'TBA',
    affiliation: '',
    date: '2026-06-19T10:00:00Z',
    time: '10:00 AM UTC',
    description:
      'Drafting, revision, co-writing. When does AI assistance improve scholarly prose, and when does it flatten it?',
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
