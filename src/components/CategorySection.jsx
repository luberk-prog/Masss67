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
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--f-head)' }}>
            Quiz Disciplines
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '14px', marginTop: '4px' }}>
            Select a specialized category to view discipline-specific arenas and track career progress.
          </p>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
                  background: isSel ? 'rgba(0,196,204,0.12)' : 'rgba(255,255,255,0.03)',
                  border: isSel ? '1px solid var(--accent)' : '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  if (!isSel) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSel) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CatIcon size={20} color={isSel ? 'var(--accent)' : 'var(--text-3)'} />
                  <span style={{
                    fontSize: '12px',
                    fontFamily: 'var(--f-num)',
                    background: isSel ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    color: isSel ? '#FFF' : 'var(--text-2)',
                    fontWeight: 600,
                  }}>
                    {cat.count} Arenas
                  </span>
                </div>

                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--f-head)' }}>
                  {cat.name}
                </div>

                <div style={{ fontSize: '12px', color: isSel ? 'var(--accent)' : 'var(--text-3)', fontWeight: 600, fontFamily: 'var(--f-num)' }}>
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