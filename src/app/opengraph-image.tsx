import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Machine Collaborators'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a2e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: '#c45d3e',
            marginBottom: 24,
          }}
        >
          A Global Conversation Series
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#f5f0e8',
            marginBottom: 32,
          }}
        >
          Machine
          <br />
          Collaborators
        </div>
        <div
          style={{
            fontSize: 24,
            lineHeight: 1.4,
            color: '#9e9891',
            maxWidth: 700,
          }}
        >
          What happens when researchers work with AI: the workflows, gains, failures, and new questions that emerge.
        </div>
      </div>
    ),
    { ...size }
  )
}
