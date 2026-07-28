import React from 'react';

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100%',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '720px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 48px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.2,
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa3Zy4kjIzXcaIc3SKAmktZscmKJSgPNtn6S4VxXtI0U3dLHWVUspHgj1t18SQSjqC2FQhs0Ytr7O1Um9abrPsb94U2-DbtADONASt0Aaa3Aelsg4HOPJGwBs4j03AmrJxvL-XdAYyJWb0z_rG08F_tDzO3AZMJjK_sNWC_gatWtu7vhdlb-nhzL5qyH829nS5LcwTjwYbes7TnF3hMMu-7486C2NwzdrygGtdYz2cqjqIJ-fbjebyns-dG8GBZ2TPCrHFT9bNpw4')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale',
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem' }}>
          <h1 style={{
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            color: '#E5E2E1',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            textAlign: 'left',
          }}>
            THE ELITE<br />
            COMPETITIVE ARENA
          </h1>
          <p style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#C9C6C6',
            borderLeft: '2px solid #FF5545',
            paddingLeft: '1rem',
            maxWidth: '2.5rem',
            marginBottom: '2rem',
          }}>
            The definitive destination for high-stakes multiplayer trivia. Outperform. Outthink. Ascend.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <button style={{
              background: '#FFFFFF',
              color: '#000000',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 48px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }} onMouseEnter={(e) => { e.currentTarget.style.background = '#E5E2E1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}>
              Enter the Arena
            </button>
            <button style={{
              border: '2px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 48px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}>
              Browse Collections
            </button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: '#0E0E0E',
        padding: '32px 48px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}>
          <div>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#A2A2A2',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}>
              Live Competitors
            </span>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '32px',
              fontWeight: 800,
              color: '#E5E2E1',
              display: 'block',
            }}>
              14,282
            </span>
          </div>
          <div>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#A2A2A2',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}>
              Quizzes Completed
            </span>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '32px',
              fontWeight: 800,
              color: '#E5E2E1',
              display: 'block',
            }}>
              1.2M
            </span>
          </div>
          <div>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#A2A2A2',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}>
              Global Lobbies
            </span>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '32px',
              fontWeight: 800,
              color: '#E5E2E1',
              display: 'block',
            }}>
              842
            </span>
          </div>
          <div>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#A2A2A2',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}>
              Prize Pool
            </span>
            <span style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '32px',
              fontWeight: 800,
              color: '#FFB4AA',
              display: 'block',
            }}>
              $245,000
            </span>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section style={{
        padding: '32px 48px',
        backgroundColor: 'var(--bg)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontSize: '24px',
            fontWeight: 700,
            color: '#E5E2E1',
            textTransform: 'uppercase',
            borderLeft: '4px solid #FF5545',
            paddingLeft: '16px',
          }}>
            Featured Collections
          </h2>
          <a href="#" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#FFB4AA',
            textDecoration: 'underline',
            transition: 'color 0.2s ease',
          }}>
            View All
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'var(--surface-container)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'relative', height: '192px', overflow: 'hidden' }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKsT6mmG4PzMv9YQAiVBHNB12dKrOHSc3v06HV7SW-8ScEouW2n_FqNFwDL8jvCAE0Jh3MC64eqVEsQDbAcI0CMxmJNeCWQcqyiW9o0mQW_yg60TBUWOssuysHCqv-sSAzmkvjyCzqWy3klMHlbUHaxkcDU6DQEGtBW4h4FAFnE1iXYHAzzjsoC0V5dyRAFK_iav3s5yfsOmzViVCPsJxlOUrQF0W7-2IfcbAtCqQl5AqIzEP6MAHmQD33ctIGjedEyFASmjEdAro"
                alt="A minimalist high-resolution desaturated close-up of a premium leather football"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(80%)',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255,255,255,0.8)',
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#FF5545',
              }}>
                PREMIUM
              </div>
            </div>
            <div style={{ padding: '16px' }}>
              <span style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                color: '#A2A2A2',
                textTransform: 'uppercase',
                marginBottom: '4px',
                display: 'block',
              }}>
                PREMIER LEAGUE
              </span>
              <h3 style={{
                fontFamily: 'Montserrat, system-ui, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#E5E2E1',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>
                Tactical Masters: 2024 Season
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                color: '#A2A2A2',
              }}>
                <span>12.4k Plays</span>
                <span style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
                <span>LEVEL 4 CLEARANCE</span>
              </div>
            </div>
          </div>
          {/* Additional cards would follow the same pattern */}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '48px 48px',
        borderTop: '1px solid var(--border)',
        backgroundColor: '#080808',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Montserrat, system-ui, sans-serif',
            fontSize: '40px',
            fontWeight: 800,
            color: '#E5E2E1',
            textTransform: 'uppercase',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
          }}>
            ARE YOU PREPARED?
          </h2>
          <button style={{
            background: '#FF5545',
            color: '#FFFFFF',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '20px 64px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
            Initiate Sequence
          </button>
        </div>
      </section>
    </main>
  );
}