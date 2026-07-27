import React, { useState } from 'react';
import { Play } from 'lucide-react';

/**
 * CollectionCard — the unified card design for MASSS67.
 *
 * Props:
 *   title        {string}  Collection/quiz title
 *   badge        {string}  Small label shown top-left on image (e.g. "Premier League")
 *   questions    {number}  Number of questions
 *   difficulty   {string}  "Easy" | "Medium" | "Hard" | "Expert"
 *   duration     {string}  Estimated play time  (e.g. "4 mins")
 *   players      {string}  Players online       (e.g. "1,840")
 *   image        {string}  Unsplash / CDN URL
 *   onPlay       {fn}      Called when card or play button is clicked
 *   size         {string}  "md" (default 320px) | "lg" (360px)
 */

const DIFFICULTY_COLORS = {
  Easy:   { text: '#22C55E', bg: 'rgba(34,197,94,0.12)'   },
  Medium: { text: '#F59E0B', bg: 'rgba(245,158,11,0.12)'  },
  Hard:   { text: '#EF4444', bg: 'rgba(239,68,68,0.12)'   },
  Expert: { text: '#A855F7', bg: 'rgba(168,85,247,0.12)'  },
};

export default function CollectionCard({
  title     = 'Untitled Collection',
  badge,
  questions = 0,
  difficulty = 'Medium',
  duration  = '–',
  players   = '–',
  image     = '',
  onPlay,
  size      = 'md',
}) {
  const [hovered, setHovered] = useState(false);
  const width  = size === 'lg' ? '360px' : '320px';
  const imgH   = size === 'lg' ? '220px' : '195px';
  const dc     = DIFFICULTY_COLORS[difficulty] ?? DIFFICULTY_COLORS.Medium;

  return (
    <article
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        minWidth: width,
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.13)' : 'var(--border)'}`,
        cursor: 'pointer',
        flexShrink: 0,
        /* lift */
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 48px rgba(0,0,0,0.50)'
          : '0 2px 10px rgba(0,0,0,0.20)',
        transition: 'transform 0.20s ease, box-shadow 0.20s ease, border-color 0.20s ease',
      }}
    >
      {/* ── IMAGE AREA (≈80%) ─────────────────────────── */}
      <div style={{
        position: 'relative',
        height: imgH,
        overflow: 'hidden',
        background: 'var(--bg-2)',
      }}>
        {/* Photo */}
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.22s ease',
              display: 'block',
            }}
          />
        )}

        {/* Bottom gradient — readability only */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(27,34,50,0.92) 0%, rgba(27,34,50,0.30) 45%, transparent 75%)',
          pointerEvents: 'none',
        }} />

        {/* ── Badge top-left ── */}
        {badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '4px 10px',
            borderRadius: '8px',
            background: 'rgba(14,17,24,0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.10)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: 'rgba(245,247,250,0.85)',
            fontFamily: 'var(--f-head)',
            lineHeight: 1,
          }}>
            {badge}
          </div>
        )}

        {/* ── Overlaid title + question count (bottom-left of image) ── */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          right: '52px',          /* leave room for play button */
        }}>
          <div style={{
            fontSize: '15px',
            fontWeight: 800,
            fontFamily: 'var(--f-head)',
            color: '#FFFFFF',
            lineHeight: 1.25,
            letterSpacing: '-0.2px',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            marginBottom: '5px',
            /* two-line clamp */
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {title}
          </div>
          <div style={{
            fontSize: '12px',
            color: 'rgba(196,203,216,0.85)',
            fontFamily: 'var(--f-num)',
            fontWeight: 600,
          }}>
            {questions} questions
          </div>
        </div>

        {/* ── Play button — lower-right, fades on hover ── */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.88)',
          transition: 'opacity 0.20s ease, transform 0.20s ease',
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(94,107,255,0.45)',
          }}>
            <Play size={16} fill="#fff" stroke="none" />
          </div>
        </div>
      </div>

      {/* ── FOOTER METADATA (thin strip) ────────────────── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 14px',
        borderTop: '1px solid var(--border)',
        gap: '8px',
      }}>
        {/* Difficulty pill */}
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          fontFamily: 'var(--f-head)',
          color: dc.text,
          background: dc.bg,
          padding: '3px 9px',
          borderRadius: '6px',
          letterSpacing: '0.02em',
          flexShrink: 0,
        }}>
          {difficulty}
        </span>

        {/* Divider */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
          {/* Duration */}
          <span style={{
            fontSize: '12px',
            color: 'var(--text-3)',
            fontFamily: 'var(--f-num)',
            whiteSpace: 'nowrap',
          }}>
            {duration}
          </span>

          {/* Separator */}
          <div style={{ width: '1px', height: '12px', background: 'var(--border)' }} />

          {/* Players online */}
          <span style={{
            fontSize: '12px',
            color: 'var(--text-3)',
            fontFamily: 'var(--f-num)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            whiteSpace: 'nowrap',
          }}>
            {/* tiny live dot */}
            <span style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: 'var(--live)',
              display: 'inline-block',
              flexShrink: 0,
            }} />
            {players}
          </span>
        </div>
      </div>
    </article>
  );
}
