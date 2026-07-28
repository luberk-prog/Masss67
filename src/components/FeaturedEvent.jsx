import React from 'react';

export default function DiscoveryHero({ onOpenQuiz, onOpenParty }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '720px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 48px',
      overflow: 'hidden',
    }}>
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.2,
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMvndj74mZ2wD9_CB36NyUN8SD_3QQMNsiyYWjbxIgk_YCWyLSX2KMRSFBoVIhn_9MNPLqFmJesbv5dgAZdUm4kVD_th3MYgAA3A-vD8nDrQHJRZcCdjreOYsb9Z2KUZM1oC3F_Cw6kuyKTscsPwISIUjByCVR3nruwyGdKXpZR3Yh7Mts1pqnQJLRX1kUiHr9gjhqQ-I27evBZTZGq1B2LbcAk0SHLHcmqQHE7nDfUExMwDTI7OpAKsLEPg5MvATNBGwMyqlww38')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale',
        }}
      />

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
          <button
            onClick={onOpenQuiz}
            style={{
              background: '#FFFFFF',
              color: '#000000',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '1rem 2.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#E5E2E1'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
          >
            Enter the Arena
          </button>
          <button
            onClick={onOpenParty}
            style={{
              border: '2px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '1rem 2.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            Browse Collections
          </button>
        </div>
      </div>
    </section>
  );
}