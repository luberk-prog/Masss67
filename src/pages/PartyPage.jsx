import React from 'react';
import { PARTY } from '../data';

export default function PartyPage() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '24px' }}>
          <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-num)', fontWeight: 500 }}>
            ← Back to Home
          </a>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '32px'
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            {PARTY.name}
          </h1>
          <p style={{ color: 'var(--text-3)', marginBottom: '24px' }}>Host: {PARTY.host}</p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
            <button style={{
              padding: '10px 16px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              fontFamily: 'var(--f-head)',
              fontSize: '14px',
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--surface-hover)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--surface-card)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}>
              Invite
            </button>
            <button style={{
              padding: '10px 20px',
              background: 'var(--accent)',
              color: '#FFF',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              fontFamily: 'var(--f-head)',
              fontSize: '14px',
              fontWeight: 600,
            }} onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-hov)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Start Quiz
            </button>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)', marginBottom: '8px' }}>
              Players ({PARTY.players.length}/{PARTY.maxPlayers})
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {PARTY.players.map(player => (
                <div key={player.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--bg-2)',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF',
                    fontWeight: 600,
                    fontSize: '12px',
                    flexShrink: 0,
                  }}>{player.avatar}</div>
                  <span style={{ fontFamily: 'var(--f-head)', fontSize: '14px', color: 'var(--text)' }}>{player.name}</span>
                  {player.ready && <span style={{ fontSize: '12px', color: '#22C55E', fontFamily: 'var(--f-num)' }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}