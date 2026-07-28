import React from 'react';
import { LEADERBOARD } from '../data';

export default function LeaderboardPage() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            Global Leaderboard
          </h1>
          <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Season 4 Rankings</p>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}>
          {LEADERBOARD.map((player, i) => (
            <div key={player.rank} style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              padding: '12px 16px',
              borderBottom: i < LEADERBOARD.length - 1 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: i < 3 ? '#F59E0B' : 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FFF', fontWeight: 700, fontSize: '12px',
                flexShrink: 0,
              }}>{player.rank}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--f-head)', fontWeight: 600, color: 'var(--text)', fontSize: '14px' }}>{player.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>{player.title}</div>
              </div>
              <div style={{ fontFamily: 'var(--f-num)', fontSize: '13px', color: 'var(--text)', minWidth: '100px', textAlign: 'right' }}>{player.rating}</div>
              <div style={{ fontFamily: 'var(--f-num)', fontSize: '13px', color: '#4ADE80', minWidth: '80px', textAlign: 'right' }}>{player.winRate}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}