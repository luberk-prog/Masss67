import React from 'react';
import Badge from './ui/Badge';
import Card from './ui/Card';


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
    <section className="section">
      <div className="content">
        <div style={{ marginBottom: '24px' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            GLOBAL RANKINGS
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
            Season 4 Leaderboard
          </h2>
        </div>

        {/* Podium Top 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}>
          {TOP_THREE.map((player) => (
            <div
              key={player.rank}
              className="game-card"
              style={{
                padding: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                padding: '2px 10px',
                borderRadius: 'var(--r-pill)',
                fontSize: '0.75rem',
                border: '1px solid var(--border)'
              }}>
                RANK #{player.rank}
              </div>

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--surface-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#FFF',
                border: '1px solid var(--border-bright)',
                marginTop: '8px',
                marginBottom: '12px'
              }}>
                {player.avatar}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>{player.name}</h3>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.06em', marginTop: '2px' }}>
                {player.title}
              </span>

              <div style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-sm)',
                padding: '10px',
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'space-around',
                fontFamily: 'var(--font-num)'
              }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>RATING</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFF' }}>{player.elo}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>WIN RATE</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4ADE80' }}>{player.winRate}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>POINTS</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--warning)' }}>{player.trophies}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table List */}
        <Card style={{ padding: '12px 20px' }}>
          {LEADERBOARD_LIST.map((p) => (
            <div
              key={p.rank}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 12px',
                borderBottom: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--font-num)', fontWeight: 700, color: 'var(--text-muted)', width: '28px', fontSize: '0.85rem' }}>
                  #{p.rank}
                </span>
                <span style={{ fontWeight: 700, color: '#FFF', fontSize: '0.9rem' }}>{p.name}</span>
                <Badge variant="ranked" size="medium">{p.badge}</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontFamily: 'var(--font-num)', fontSize: '0.85rem' }}>
                <span style={{ color: '#FFF', fontWeight: 700 }}>{p.elo}</span>
                <span style={{ color: '#4ADE80', fontWeight: 600 }}>{p.winRate}</span>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
