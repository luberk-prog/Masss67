import React from 'react';
import { CATEGORIES } from '../data';

export default function CategoriesPage() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>
            Categories
          </h1>
          <p style={{ color: 'var(--text-3)' }}>Browse quizzes by discipline</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {CATEGORIES.map(cat => (
            <div
              key={cat.id}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '24px 16px', background: 'var(--surface)',
                border: '1px solid var(--border)', borderRadius: 'var(--r-md)',
                cursor: 'pointer', transition: 'all 0.15s ease',
                textDecoration: 'none', color: 'var(--text)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '12px', fontSize: '16px', fontWeight: 600, color: '#FFF'
              }}>
                {cat.title.split(' ')[0][0]}
              </div>
              <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: '14px' }}>{cat.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}