import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { COLLECTIONS } from '../data';
import { Play, Users } from 'lucide-react';

export default function Collection() {
  const location = useLocation();
  const collectionId = location.state?.collectionId || 'premier-league';
  const collection = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];

  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-num)', fontWeight: 500 }}>
          ← Back to Collections
        </Link>

        <div style={{
          position: 'relative',
          width: '100%',
          height: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '24px',
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
        }}>
          <img
            src={collection.image}
            alt={collection.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.30) 100%)',
          }} />
          <div style={{
            position: 'relative',
            zIndex: 10,
            padding: '48px 32px 32px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <h1 style={{
              fontFamily: 'var(--f-head)',
              fontSize: '48px',
              fontWeight: 800,
              color: '#FFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              maxWidth: '720px',
            }}>
              {collection.title}
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-2)',
              marginBottom: '20px',
              maxWidth: '520px',
            }}>
              {collection.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>⏱ {collection.duration}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>⚙ {collection.difficulty}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                style={{
                  padding: '14px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  borderRadius: '10px',
                  background: 'var(--accent)',
                  color: '#FFF',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,196,204,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Play size={16} fill="#fff" stroke="none" style={{ marginRight: '8px' }} />
                Play Now
              </button>
              <button
                style={{
                  padding: '14px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                <Users size={16} style={{ marginRight: '8px' }} />
                Create Party
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}