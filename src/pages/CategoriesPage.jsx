import React from 'react';
import { CATEGORIES } from '../data';
import { Compass, Trophy, Atom, Film, Landmark, Code2, Globe } from 'lucide-react';

const CATEGORY_ICONS = {
  'Geography & Cartography': Compass,
  'Football & Athletics': Trophy,
  'Science & Astrophysics': Atom,
  'Film & Media History': Film,
  'World History & Civilizations': Landmark,
  'Software & Engineering': Code2,
  'All Disciplines': Globe,
};

export default function CategoriesPage() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            Categories
          </h1>
          <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Browse quizzes by discipline</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {CATEGORIES.map(cat => {
            const Icon = CATEGORY_ICONS[cat.title] || Globe;
            return (
              <div
                key={cat.id}
                style={{
                  padding: '24px 20px',
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  flexShrink: 0,
                }}>
                  <Icon size={24} color="#FFF" />
                </div>
                <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: '15px', color: 'var(--text)' }}>{cat.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}