import React from 'react';
import { ChevronRight } from 'lucide-react';
import CollectionTile from './CollectionTile';

const COLLECTIONS = [
  {
    id: 'premier-league',
    title: 'Premier League',
    badge: 'Premier League',
    questions: 180,
    difficulty: 'Medium',
    duration: '5 mins',
    players: '1,240',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    badge: 'Champions League',
    questions: 200,
    difficulty: 'Hard',
    duration: '6 mins',
    players: '2,108',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-cup',
    title: 'FIFA World Cup',
    badge: 'World Cup',
    questions: 240,
    difficulty: 'Hard',
    duration: '7 mins',
    players: '3,902',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'la-liga',
    title: 'La Liga',
    badge: 'La Liga',
    questions: 150,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '880',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'serie-a',
    title: 'Serie A',
    badge: 'Serie A',
    questions: 140,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '640',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d8c83?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'bundesliga',
    title: 'Bundesliga',
    badge: 'Bundesliga',
    questions: 130,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '512',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    badge: 'AFCON',
    questions: 100,
    difficulty: 'Medium',
    duration: '3 mins',
    players: '348',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'ballon-dor',
    title: "Ballon d'Or",
    badge: "Ballon d'Or",
    questions: 80,
    difficulty: 'Hard',
    duration: '3 mins',
    players: '726',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'managers',
    title: 'Managers',
    badge: 'Managers',
    questions: 90,
    difficulty: 'Hard',
    duration: '3 mins',
    players: '290',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'transfers',
    title: 'Transfers',
    badge: 'Transfers',
    questions: 70,
    difficulty: 'Easy',
    duration: '2 mins',
    players: '415',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'classic-matches',
    title: 'Classic Matches',
    badge: 'Classic Matches',
    questions: 120,
    difficulty: 'Hard',
    duration: '4 mins',
    players: '1,033',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'legends',
    title: 'Football Legends',
    badge: 'Legends',
    questions: 160,
    difficulty: 'Hard',
    duration: '5 mins',
    players: '1,780',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=700&q=80&auto=format&fit=crop',
  },
];

export default function FootballUniverse({ onOpenQuiz }) {
  return (
    <section style={{ padding: '56px 0 0' }}>
      {/* Header */}
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
            marginBottom: '4px',
          }}>
            Football Universe
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
            Explore quizzes from the world's biggest competitions.
          </p>
        </div>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--f-head)',
            color: 'var(--text-3)',
            padding: '7px 14px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text-2)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-3)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          See all <ChevronRight size={14} />
        </button>
      </div>

      {/* Horizontal scroll rail */}
      <div style={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        padding: '4px 32px 32px',
        scrollSnapType: 'x mandatory',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}>
        {COLLECTIONS.map(col => (
          <CollectionTile
            key={col.id}
            title={col.title}
            category={col.badge}
            description={col.description}
            image={col.image}
            questionCount={col.questions}
            difficulty={col.difficulty}
            estimatedDuration={col.duration}
            playersOnline={col.players}
            onPlay={onOpenQuiz}
          />
        ))}
        {/* peek spacer */}
        <div style={{ width: '8px', flexShrink: 0 }} />
      </div>
    </section>
  );
}
