import React from 'react';
import { ChevronRight } from 'lucide-react';
import CollectionCard from './CollectionCard';

const COLLECTIONS = [
  {
    id: 'gaming-history',
    title: 'Interactive Media & Gaming History',
    badge: 'Curated',
    questions: 150,
    difficulty: 'Medium',
    duration: '5 mins',
    players: '2,840',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'deep-ocean',
    title: 'Deep Ocean & Astrophysical Anomalies',
    badge: 'Science',
    questions: 120,
    difficulty: 'Hard',
    duration: '4 mins',
    players: '1,220',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-architecture',
    title: 'World Architectural Monuments & Cartography',
    badge: 'History',
    questions: 200,
    difficulty: 'Expert',
    duration: '6 mins',
    players: '940',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'cinema-greats',
    title: 'Golden Age of Cinema & Film History',
    badge: 'Movies',
    questions: 130,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '1,760',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80&auto=format&fit=crop',
  },
];

export default function FeaturedCollections({ onOpenQuiz }) {
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
            Featured Collections
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
            Editorially curated quiz collections, updated weekly.
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
          Browse all <ChevronRight size={14} />
        </button>
      </div>

      {/* Horizontal scroll rail — larger cards for editorial feel */}
      <div style={{
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        padding: '4px 32px 32px',
        scrollSnapType: 'x mandatory',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}>
        {COLLECTIONS.map(col => (
          <CollectionCard
            key={col.id}
            size="lg"
            title={col.title}
            badge={col.badge}
            questions={col.questions}
            difficulty={col.difficulty}
            duration={col.duration}
            players={col.players}
            image={col.image}
            onPlay={onOpenQuiz}
          />
        ))}
        <div style={{ width: '8px', flexShrink: 0 }} />
      </div>
    </section>
  );
}
