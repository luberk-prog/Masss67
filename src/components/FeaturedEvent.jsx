import React from 'react';
import { Play, Users } from 'lucide-react';

/* Cinematic hero using a high-quality Unsplash photo of a stadium */
const HERO_IMAGE = 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1800&q=85&auto=format&fit=crop';

export default function DiscoveryHero({ onOpenQuiz, onOpenParty }) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '540px',
      overflow: 'hidden',
    }}>
      {/* ── Cinematic background image ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${HERO_IMAGE}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        transform: 'scale(1.02)',
        transition: 'transform 6s ease',
      }} />

      {/* ── Dark gradient overlay (bottom-heavy, allows image to breathe at top) ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(14,17,24,0.92) 40%, rgba(14,17,24,0.30) 100%), linear-gradient(to top, rgba(14,17,24,0.85) 0%, transparent 60%)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 80px 64px',
        maxWidth: '720px',
      }}>
        {/* Collection label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'var(--text-3)',
            fontFamily: 'var(--f-head)',
            textTransform: 'uppercase',
          }}>
            Featured Collection
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--live)',
            fontFamily: 'var(--f-num)',
          }}>
            <span className="live-dot" />
            3,240 playing now
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--f-head)',
          fontSize: '52px',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '16px',
          maxWidth: '600px',
        }}>
          UEFA Champions League Collection
        </h1>

        {/* Supporting sentence */}
        <p style={{
          fontSize: '16px',
          color: 'var(--text-2)',
          lineHeight: 1.6,
          marginBottom: '32px',
          maxWidth: '480px',
        }}>
          200 questions across group stages, knockouts and finals. How well do you know Europe's greatest competition?
        </p>

        {/* Two CTAs only */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            className="btn btn-primary"
            onClick={onOpenQuiz}
            style={{ padding: '13px 28px', fontSize: '15px' }}
          >
            <Play size={16} fill="#fff" stroke="none" />
            Play Now
          </button>
          <button
            className="btn btn-secondary"
            onClick={onOpenParty}
            style={{ padding: '13px 24px', fontSize: '15px' }}
          >
            <Users size={16} />
            Create Party
          </button>
        </div>
      </div>
    </section>
  );
}
