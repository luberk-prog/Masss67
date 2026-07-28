import React from 'react';

const TOP_THREE = [
  {
    rank: 1,
    name: 'Vortex_X',
    title: 'SEASON 4 WORLD CHAMPION',
    avatar: 'VX',
    elo: '3,420 ELO',
    winRate: '89.4%',
    trophies: '14,890 PTS'
  },
  {
    rank: 2,
    name: 'AstroGeek_X',
    title: 'GEOGRAPHY GRANDMASTER',
    avatar: 'AG',
    elo: '3,210 ELO',
    winRate: '86.1%',
    trophies: '12,450 PTS'
  },
  {
    rank: 3,
    name: 'CyberQueen',
    title: 'SPEEDRUNNER TITAN',
    avatar: 'CQ',
    elo: '3,145 ELO',
    winRate: '84.8%',
    trophies: '11,920 PTS'
  }
];

const LEADERBOARD_LIST = [
  { rank: 4, name: 'ApexPredictor', elo: '3,080 ELO', winRate: '82.5%', badge: 'GRANDMASTER' },
  { rank: 5, name: 'ShadowKnight_99', elo: '2,990 ELO', winRate: '81.2%', badge: 'DIAMOND III' },
  { rank: 6, name: 'ByteWizard', elo: '2,940 ELO', winRate: '79.9%', badge: 'DIAMOND II' },
  { rank: 7, name: 'EchoChamber', elo: '2,880 ELO', winRate: '78.4%', badge: 'DIAMOND I' }
];

export default function TopPlayers() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ color: 'var(--text-3)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--f-num)' }}>
            GLOBAL RANKINGS
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginTop: '4px', fontFamily: 'var(--f-head)' }}>
            Season 4 Leaderboard
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {TOP_THREE.map((player) => (
            <div
              key={player.rank}
              style={{
                padding: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                color: 'var(--text-2)',
                fontFamily: 'var(--f-num)',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                border: '1px solid var(--border)'
              }}>
                RANK #{player.rank}
              </span>

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--bg-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                marginTop: '8px',
                marginBottom: '12px',
              }}>
                {player.avatar}
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--f-head)' }}>{player.name}</h3>
              <span style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 600, fontFamily: 'var(--f-num)', marginTop: '2px' }}>
                {player.title}
              </span>

              <div style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '10px',
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'space-around',
                fontFamily: 'var(--f-num)'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>RATING</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{player.elo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>WIN RATE</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#4ADE80' }}>{player.winRate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>POINTS</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#F59E0B' }}>{player.trophies}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {LEADERBOARD_LIST.map((p) => (
            <div
              key={p.rank}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--f-num)', fontWeight: 700, color: 'var(--text-3)', width: '24px', fontSize: '13px' }}>
                  #{p.rank}
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '14px' }}>{p.name}</span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  background: 'rgba(250, 204, 16, 0.15)',
                  border: '1px solid rgba(250, 204, 16, 0.3)',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#F59E0B',
                  fontFamily: 'var(--f-num)',
                }}>
                  {p.badge}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontFamily: 'var(--f-num)', fontSize: '13px' }}>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>{p.elo}</span>
                <span style={{ color: '#4ADE80', fontWeight: 600 }}>{p.winRate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}