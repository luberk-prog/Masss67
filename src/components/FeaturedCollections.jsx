import React from 'react';
import { Star, Play } from 'lucide-react';


const COLLECTIONS = [
  {
    id: 'deck-1',
    title: 'Interactive Media & Gaming History',
    questions: '150 Questions',
    author: 'Curated by MASSS67',
    completion: '65% Complete',
    rating: '4.98'
  },
  {
    id: 'deck-2',
    title: 'Deep Ocean & Astrophysical Anomalies',
    questions: '120 Questions',
    author: 'AstroGeek_X',
    completion: '20% Complete',
    rating: '4.91'
  },
  {
    id: 'deck-3',
    title: 'World Architectural Monuments & Cartography',
    questions: '200 Questions',
    author: 'GeoMaster_EU',
    completion: '100% Mastered',
    rating: '5.0'
  }
];

export default function FeaturedCollections({ onOpenQuiz }) {
  return (
    <section style={{
      maxWidth: '1600px',
      margin: '40px auto',
      padding: '0 24px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            CURATED PLAYLISTS
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
            Featured Collections
          </h2>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px'
      }}>
        {COLLECTIONS.map((col) => (
          <div
            key={col.id}
            className="game-card"
            onClick={onOpenQuiz}
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              minHeight: '200px',
              cursor: 'pointer'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge badge-ranked" style={{ fontSize: '0.7rem' }}>
                  {col.questions}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--warning)', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Star size={12} fill="var(--warning)" /> {col.rating}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', lineHeight: 1.3 }}>
                {col.title}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Author: {col.author}
              </p>
            </div>

            <div style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '14px',
              marginTop: '16px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-main)', fontWeight: 600, fontFamily: 'var(--font-num)' }}>
                {col.completion}
              </span>

              <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                <Play size={12} fill="#FFF" /> Play Playlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
