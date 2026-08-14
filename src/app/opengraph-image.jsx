import { ImageResponse } from 'next/og';

export const alt = 'Vinayaka S — Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#070a13',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.8,
          }}
        />

        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '20%',
            width: '400px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(16, 185, 129, 0.06)',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#10b981',
                textTransform: 'uppercase',
                letterSpacing: '2.5px',
              }}
            >
              Software Developer Portfolio
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-2px',
            }}
          >
            Vinayaka S.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '24px',
              color: '#a1a1aa',
              marginTop: '20px',
              maxWidth: '650px',
              lineHeight: '1.4',
            }}
          >
            MCA Candidate · Python, Machine Learning & Web Applications
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
