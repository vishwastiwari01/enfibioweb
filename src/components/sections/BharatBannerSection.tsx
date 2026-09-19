'use client';

export default function BharatBannerSection() {
  return (
    <section
      className="relative overflow-hidden py-14"
      style={{
        background: 'linear-gradient(135deg, #08161E 0%, #0F2A38 50%, #081B24 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Background ambient map grid illumination */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#075E5A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Built for Bharat & Beyond */}
          <div className="lg:col-span-5 flex flex-col">
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#3C806C',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              Built For
            </span>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '10px',
              }}
            >
              Bharat & Beyond
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.6,
                maxWidth: '420px',
              }}
            >
              Local challenges inspire global solutions. We are committed to developing technologies
              that create meaningful impact, starting from our communities.
            </p>
          </div>

          {/* Right: Key Stats Strip */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:border-l lg:border-white/10 lg:pl-8">
            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                12+
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '4px',
                }}
              >
                Active Projects
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                3
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '4px',
                }}
              >
                Founders
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: '#3C806C',
                  lineHeight: 1,
                }}
              >
                Multiple
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '4px',
                }}
              >
                Research Domains
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                1 Vision
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '4px',
                }}
              >
                A More Resilient Tomorrow
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
