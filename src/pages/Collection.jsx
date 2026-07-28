import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { COLLECTIONS } from '../data';

export default function Collection() {
  const location = useLocation();
  const collectionId = location.state?.collectionId || 'premier-league';
  const collection = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];

  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px' }}>
            ← Back to Collections
          </Link>
        </div>

        <div style={{
          position: 'relative', width: '100%', height: '400px', borderRadius: 'var(--r-xl)',
          overflow: 'hidden', marginBottom: '24px', background: 'var(--surface)',
          border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <img src={collection.image} alt={collection.title} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(14,17,24,0.92) 0%, rgba(14,17,24,0.30) 100%)'
          }} />
          <div style={{ position: 'relative', zIndex: 10, padding: '48px 32px 32px' }}>
            <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '2.8rem', fontWeight: 800, color: '#FFF', marginBottom: '12px' }}>
              {collection.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>{collection.subtitle}</p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>⏱ {collection.duration}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>⚙ {collection.difficulty}</span>
              </div>
            </div>
            <button style={{
              padding: '13px 28px', fontSize: '15px', fontWeight: 600,
              fontFamily: 'var(--f-head)', borderRadius: '10px',
              background: 'var(--accent)', color: '#FFF', border: 'none', cursor: 'pointer',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease'
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(94,107,255,0.4)'; }}
                 onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              Play Now
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <button style={{ padding: '10px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', cursor: 'pointer', transition: 'all 0.15s ease' }}>Party Mode</button>
          <button style={{ padding: '10px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', cursor: 'pointer', transition: 'all 0.15s ease' }}>Review Mode</button>
        </div>
      </div>
    </section>
  );
}