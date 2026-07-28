import React from 'react';
import { PARTY } from '../data';

export default function PartyPage() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px' }}>
            ← Back to Home
          </a>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)', marginBottom: '32px'
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            {PARTY.name}
          </h1>
          <p style={{ color: 'var(--text-3)', marginBottom: '24px' }}>Host: {PARTY.host}</p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{ padding: '10px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', cursor: 'pointer' }}>Invite</button>
              <button style={{ padding: '10px 16px', background: 'var(--accent)', color: '#FFF', border: 'none', borderRadius: 'var(--r-sm)', cursor: 'pointer' }}>Start Quiz</button>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '8px' }}>Players ({PARTY.players.length}/{PARTY.maxPlayers})</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {PARTY.players.map(player => (
                <div key={player.id} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'var(--bg-2)', padding: '8px 12px', borderRadius: 'var(--r-sm)'
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FFF', fontWeight: 600, fontSize: '12px'
                  }}>{player.avatar}</div>
                  <span style={{ fontFamily: 'var(--f-head)', fontSize: '13px', color: 'var(--text)' }}>{player.name}</span>
                  {player.ready && <span style={{ fontSize: '12px', color: '#22C55E' }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}