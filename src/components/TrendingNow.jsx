import React from 'react';
import { Users, Clock, Play, Trophy, Gamepad2, Code2, Landmark, Star } from 'lucide-react';

const TRENDING_ARENAS = [
  {
    id: 'football-cl',
    title: 'UEFA Champions League & World Football',
    category: 'SPORTS ARENA',
    Icon: Trophy,
    activePlayers: '1,840',
    duration: '3 Mins',
    xpMultiplier: '2.5x XP',
    difficulty: 'HARD',
    rating: '4.9'
  },
  {
    id: 'gaming-lore',
    title: 'Gaming & Interactive Media Lore',
    category: 'GAMING ARENA',
    Icon: Gamepad2,
    activePlayers: '2,310',
    duration: '4 Mins',
    xpMultiplier: '2.0x XP',
    difficulty: 'MEDIUM',
    rating: '4.95'
  },
  {
    id: 'ai-tech',
    title: 'Computer Science & Software Architecture',
    category: 'TECH ARENA',
    Icon: Code2,
    activePlayers: '980',
    duration: '5 Mins',
    xpMultiplier: '3.0x XP',
    difficulty: 'EXPERT',
    rating: '4.88'
  },
  {
    id: 'ancient-history',
    title: 'Ancient Empires & Classical Warfare',
    category: 'HISTORY ARENA',
    Icon: Landmark,
    activePlayers: '1,120',
    duration: '4 Mins',
    xpMultiplier: '1.8x XP',
    difficulty: 'MEDIUM',
    rating: '4.92'
  }
];

export default function TrendingNow({ onOpenQuiz }) {
  return (
    <section style={{
      maxWidth: '1600px',
      margin: '40px auto',
      padding: '0 24px'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '20px'
      }}>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            POPULAR SELECTIONS
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
            Trending Arenas
          </h2>
        </div>

        <a href="#" style={{
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Explore All Arenas →
        </a>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {TRENDING_ARENAS.map((arena) => {
          const ArenaIcon = arena.Icon;
          return (
            <div
              key={arena.id}
              className="game-card"
              onClick={onOpenQuiz}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                minHeight: '230px',
                cursor: 'pointer'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--r-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    border: '1px solid var(--border)'
                  }}>
                    <ArenaIcon size={20} color="var(--text-main)" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className="badge badge-ranked" style={{ fontSize: '0.68rem' }}>
                      {arena.xpMultiplier}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--warning)', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 }}>
                      <Star size={11} fill="var(--warning)" /> {arena.rating}
                    </span>
                  </div>
                </div>

                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: 700 }}>
                  {arena.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginTop: '4px', lineHeight: 1.3 }}>
                  {arena.title}
                </h3>
              </div>

              {/* Bottom Specs */}
              <div style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '14px',
                marginTop: '16px',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={13} color="#4ADE80" /> {arena.activePlayers} Live
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {arena.duration}
                  </span>
                </div>

                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                  <Play size={12} fill="#FFF" /> Play
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
