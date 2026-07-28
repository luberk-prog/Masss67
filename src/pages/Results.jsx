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
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '28px', fontWeight: 800, color: 'var(--text)', marginBottom: '16px' }}>
            Quiz Complete
          </h1>

          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: percentage >= 80 ? 'rgba(34,197,94,0.15)' : percentage >= 60 ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid',
            borderColor: percentage >= 80 ? '#22C55E' : percentage >= 60 ? '#F59E0B' : '#EF4444',
            position: 'relative',
          }}>
            <div style={{ fontFamily: 'var(--f-num)', fontSize: '28px', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>
              {score}/{total}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-3)', marginTop: '4px' }}>
              {percentage}%
            </div>
          </div>

          <p style={{ fontSize: '16px', color: 'var(--text-2)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
            {percentage >= 80 ? 'Excellent! You\'re a true expert!'
              : percentage >= 60 ? 'Good job! Keep learning.'
              : 'Better luck next time! Review and try again.'
            }
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--f-head)',
                borderRadius: '12px',
                background: 'var(--accent)',
                color: '#FFF',
                border: 'none',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hov)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Play Again
            </Link>
            <Link
              to="/"
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--f-head)',
                borderRadius: '12px',
                background: 'var(--surface-card)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--surface-hover)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--surface-card)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
            Global Rankings After Your Score
          </h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {LEADERBOARD.slice(0, 5).map(player => (
              <span
                key={player.rank}
                style={{
                  padding: '6px 12px',
                  background: 'var(--bg-2)',
                  borderRadius: '999px',
                  fontSize: '13px',
                  color: player.rank <= 3 ? '#FFF' : 'var(--text-2)',
                  fontFamily: 'var(--f-num)',
                }}
              >
                #{player.rank} {player.name.split('_')[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}