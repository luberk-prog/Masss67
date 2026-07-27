import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const COMPETITIONS = [
  {
    id: 'premier-league',
    title: 'Premier League',
    questions: 250,
    collections: 12,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    questions: 200,
    collections: 8,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-cup',
    title: 'FIFA World Cup',
    questions: 300,
    collections: 15,
    updated: 'Updated Monthly',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'la-liga',
    title: 'La Liga',
    questions: 180,
    collections: 10,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'serie-a',
    title: 'Serie A',
    questions: 160,
    collections: 9,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d8c83?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bundesliga',
    title: 'Bundesliga',
    questions: 140,
    collections: 8,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'europa-league',
    title: 'Europa League',
    questions: 170,
    collections: 7,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    questions: 120,
    collections: 6,
    updated: 'Updated Monthly',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'uefa-euro',
    title: 'UEFA Euro',
    questions: 220,
    collections: 11,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mls',
    title: 'MLS',
    questions: 100,
    collections: 5,
    updated: 'Updated Weekly',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80&auto=format&fit=crop',
  },
];

export default function FootballUniverse({ onOpenQuiz }) {
  return (
    <section style={{ padding: '56px 0 0' }}>
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
            Explore competitions, clubs and legendary tournaments.
          </p>
        </div>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--f-head)',
            color: 'var(--accent)',
            padding: '7px 14px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent-hov)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          View All
          <ChevronRight size={14} />
        </a>
      </div>

      <div className="fu-rail">
        {COMPETITIONS.map((comp) => (
          <div
            key={comp.id}
            onClick={onOpenQuiz}
            className="fu-card"
          >
            <img
              src={comp.image}
              alt={comp.title}
              loading="lazy"
              className="fu-card-img"
            />
            <div className="fu-card-overlay" />
            <div className="fu-card-content">
              <div>
                <h3 className="fu-card-title">{comp.title}</h3>
                <div className="fu-card-meta">
                  <span>{comp.questions} Questions</span>
                  <span>{comp.collections} Collections</span>
                  <span>{comp.updated}</span>
                </div>
              </div>
              <div className="fu-play-btn">
                <Play size={16} fill="#FFF" stroke="none" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}