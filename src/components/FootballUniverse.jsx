import React, { useRef } from 'react';
import { Play, ChevronRight } from 'lucide-react';

/*
 * Each collection uses a free Unsplash photograph.
 * Photos chosen to feel editorial and authentic — real stadiums, trophies, crowds.
 * No icons. No emojis. No illustrations.
 */
const COLLECTIONS = [
  {
    id: 'premier-league',
    title: 'Premier League',
    questions: 180,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    questions: 200,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-cup',
    title: 'FIFA World Cup',
    questions: 240,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'la-liga',
    title: 'La Liga',
    questions: 150,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'serie-a',
    title: 'Serie A',
    questions: 140,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d8c83?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'bundesliga',
    title: 'Bundesliga',
    questions: 130,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    questions: 100,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'ballon-dor',
    title: "Ballon d'Or",
    questions: 80,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'managers',
    title: 'Managers',
    questions: 90,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'transfers',
    title: 'Transfers',
    questions: 70,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'classic-matches',
    title: 'Classic Matches',
    questions: 120,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'legends',
    title: 'Football Legends',
    questions: 160,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80&auto=format&fit=crop',
  },
];

const DIFFICULTY_COLOR = {
  Easy:   '#22C55E',
  Medium: '#F59E0B',
  Hard:   '#EF4444',
};

function FootballCard({ collection, onPlay }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay?.()}
      style={{
        width: '260px',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        flexShrink: 0,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.45)' : '0 2px 8px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        position: 'relative',
      }}
    >
      {/* ── Image (≈70% of card height) ── */}
      <div style={{
        height: '160px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={collection.image}
          alt={collection.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.22s ease',
          }}
          loading="lazy"
        />
        {/* Bottom gradient on image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(27,34,50,0.7) 0%, transparent 60%)',
        }} />

        {/* Play button — fades in on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(94,107,255,0.4)',
          }}>
            <Play size={18} fill="#fff" stroke="none" />
          </div>
        </div>
      </div>

      {/* ── Content (≈30% of card) ── */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--text)',
          fontFamily: 'var(--f-head)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}>
          {collection.title}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontSize: '12px',
            color: 'var(--text-3)',
            fontFamily: 'var(--f-num)',
          }}>
            {collection.questions} questions
          </span>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: 'var(--f-head)',
            color: DIFFICULTY_COLOR[collection.difficulty],
            background: `${DIFFICULTY_COLOR[collection.difficulty]}18`,
            padding: '2px 8px',
            borderRadius: '6px',
          }}>
            {collection.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FootballUniverse({ onOpenQuiz }) {
  const railRef = useRef(null);

  return (
    <section style={{ padding: '48px 0 0' }}>
      {/* ── Section header ── */}
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '0 32px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--f-head)',
            fontSize: '24px',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '-0.3px',
            marginBottom: '6px',
          }}>
            Football Universe
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-3)',
          }}>
            Explore quizzes from the world's biggest competitions.
          </p>
        </div>
        <button className="btn-ghost" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--text-3)',
          padding: '7px 14px',
          borderRadius: '10px',
          border: '1px solid var(--border)',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        >
          See all <ChevronRight size={14} />
        </button>
      </div>

      {/* ── Horizontal scroll rail ── */}
      <div
        ref={railRef}
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          padding: '4px 32px 24px',
          scrollSnapType: 'x mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {COLLECTIONS.map(col => (
          <FootballCard
            key={col.id}
            collection={col}
            onPlay={onOpenQuiz}
          />
        ))}
        {/* Peek hint at end */}
        <div style={{ width: '16px', flexShrink: 0 }} />
      </div>
    </section>
  );
}
