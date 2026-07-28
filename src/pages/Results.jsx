import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LEADERBOARD } from '../data';

export default function Results() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 5 };
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    document.title = `Quiz Results - MASSS67`;
  }, []);

  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          textAlign: 'center', marginBottom: '32px'
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '28px', fontWeight: 800, color: 'var(--text)', marginBottom: '16px' }}>
            Quiz Complete
          </h1>

          <div style={{
            width: '140px', height: '140px', borderRadius: '50%',
            background: percentage >= 80 ? 'rgba(34,197,94,0.15)' : percentage >= 60 ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)',
            margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid', borderColor: percentage >= 80 ? '#22C55E' : percentage >= 60 ? '#F59E0B' : '#EF4444'
          }}>
            <div style={{ fontFamily: 'var(--f-num)', fontSize: '28px', fontWeight: 800, color: 'var(--text)' }}>
              {score}/{total}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-3)', marginTop: '4px' }}>
              {percentage}%
            </div>
          </div>

          <p style={{ fontSize: '16px', color: 'var(--text-2)', marginBottom: '24px' }}>
            {percentage >= 80 ? 'Excellent! You\'re a true expert!'
              : percentage >= 60 ? 'Good job! Keep learning.'
              : 'Better luck next time! Review and try again.'
            }
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/play"
              style={{
                padding: '12px 24px', fontSize: '15px', fontWeight: 600,
                fontFamily: 'var(--f-head)', borderRadius: '10px',
                background: 'var(--accent)', color: '#FFF', border: 'none',
                textDecoration: 'none', cursor: 'pointer',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Play Again
            </Link>
            <Link
              to="/"
              style={{
                padding: '12px 24px', fontSize: '15px', fontWeight: 600,
                fontFamily: 'var(--f-head)', borderRadius: '10px',
                background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)',
                textDecoration: 'none', cursor: 'pointer',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
            Global Rankings After Your Score
          </h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {LEADERBOARD.slice(0, 5).map(player => (
              <span key={player.rank} style={{
                padding: '4px 10px', background: 'var(--bg-2)',
                borderRadius: 'var(--r-pill)', fontSize: '12px',
                color: player.rank <= 3 ? '#FFF' : 'var(--text-2)',
                fontFamily: 'var(--f-num)'
              }}>
                #{player.rank} {player.name.split('_')[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}