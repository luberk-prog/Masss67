import React, { useState } from 'react';
import { Compass, Trophy, Atom, Film, Landmark, Code2, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'All Disciplines', Icon: Sparkles, count: 48, mastery: 'Mastery 94%' },
  { id: 'geo', name: 'Geography & Cartography', Icon: Compass, count: 12, mastery: 'Rank #4 Global' },
  { id: 'sports', name: 'Football & Athletics', Icon: Trophy, count: 9, mastery: 'Diamond II' },
  { id: 'science', name: 'Science & Astrophysics', Icon: Atom, count: 8, mastery: 'Gold I' },
  { id: 'pop', name: 'Film & Media History', Icon: Film, count: 7, mastery: 'Platinum III' },
  { id: 'history', name: 'World History & Civilizations', Icon: Landmark, count: 6, mastery: 'Silver I' },
  { id: 'tech', name: 'Software & Engineering', Icon: Code2, count: 6, mastery: 'Grandmaster' }
];

export default function CategorySection() {
  const [selected, setSelected] = useState('all');

  return (
    <section style={{
      maxWidth: '1600px',
      margin: '40px auto',
      padding: '0 24px'
    }}>
      <div style={{
        background: 'var(--card)',
        borderRadius: 'var(--r-xl)',
        border: '1px solid var(--border)',
        padding: '32px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>
            Quiz Disciplines
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Select a specialized category to view discipline-specific arenas and track career progress.
          </p>
        </div>

        {/* Category Matrix */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '12px'
        }}>
          {CATEGORIES.map((cat) => {
            const CatIcon = cat.Icon;
            const isSel = selected === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                style={{
                  background: isSel ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSel ? '1px solid var(--border-bright)' : '1px solid var(--border)',
                  borderRadius: 'var(--r-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CatIcon size={20} color={isSel ? '#FFF' : 'var(--text-muted)'} />
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-num)',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '2px 8px',
                    borderRadius: 'var(--r-pill)',
                    color: isSel ? '#FFF' : 'var(--text-muted)'
                  }}>
                    {cat.count} Arenas
                  </span>
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFF' }}>
                  {cat.name}
                </div>

                <div style={{ fontSize: '0.7rem', color: isSel ? 'var(--accent-secondary)' : 'var(--text-dark)', fontWeight: 600 }}>
                  {cat.mastery}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
