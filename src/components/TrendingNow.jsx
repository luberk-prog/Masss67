import React from 'react';
import { ChevronRight } from 'lucide-react';
import CollectionCard from './CollectionCard';

const TRENDING = [
  {
    id: 'football-cl',
    title: 'UEFA Champions League & World Football',
    badge: 'Football',
    questions: 200,
    difficulty: 'Hard',
    duration: '6 mins',
    players: '1,840',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'gaming-lore',
    title: 'Gaming & Interactive Media History',
    badge: 'Gaming',
    questions: 150,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '2,310',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'ai-tech',
    title: 'Computer Science & Software Architecture',
    badge: 'Technology',
    questions: 120,
    difficulty: 'Expert',
    duration: '5 mins',
    players: '980',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'ancient-history',
    title: 'Ancient Empires & Classical Warfare',
    badge: 'History',
    questions: 140,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '1,120',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'space-science',
    title: 'Astrophysics & Deep Space Exploration',
    badge: 'Science',
    questions: 110,
    difficulty: 'Hard',
    duration: '4 mins',
    players: '760',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'cinema',
    title: 'Golden Age of Cinema & Film History',
    badge: 'Movies',
    questions: 130,
    difficulty: 'Medium',
    duration: '4 mins',
    players: '1,450',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80&auto=format&fit=crop',
  },
];

export default function TrendingNow({ onOpenQuiz }) {
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
            Trending Right Now
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
            The most active collections across the platform.
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
        {TRENDING.map(item => (
          <CollectionCard
            key={item.id}
            title={item.title}
            badge={item.badge}
            questions={item.questions}
            difficulty={item.difficulty}
            duration={item.duration}
            players={item.players}
            image={item.image}
            onPlay={onOpenQuiz}
          />
        ))}
        <div style={{ width: '8px', flexShrink: 0 }} />
      </div>
    </section>
  );
}
