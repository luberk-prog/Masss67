import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';

export default function Categories() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>
          Categories
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
          Browse quizzes by discipline
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '0 32px 32px' }}>
        {CATEGORIES.map(cat => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '24px 16px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)',
              textDecoration: 'none',
              color: 'var(--text)',
              transition: 'all 0.15s ease',
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
              marginBottom: '12px', fontSize: '20px' }}>{cat.icon}</div>
            <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: '14px' }}>{cat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}