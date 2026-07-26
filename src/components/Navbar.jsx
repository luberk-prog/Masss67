import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Gamepad2, 
  Crown,
  ChevronDown,
  Flame,
  Volume2,
  VolumeX,
  Coins,
  Gem
} from 'lucide-react';

export default function Navbar({ onOpenQuiz, onOpenParty }) {
  const [muted, setMuted] = useState(false);
  const [activeTab, setActiveTab] = useState('arenas');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(8, 11, 22, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)'
    }}>
      {/* Top Status Bar */}
      <div style={{
        background: 'rgba(17, 24, 39, 0.5)',
        borderBottom: '1px solid var(--border)',
        padding: '6px 24px',
        fontSize: '0.75rem',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        color: 'var(--text-muted)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ADE80', fontWeight: 600 }}>
            <span className="live-dot" /> SEASON 4 LIVE
          </span>
          <span style={{ color: 'var(--border-bright)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Trophy size={13} color="var(--warning)" /> Grand Tournament: <strong style={{ color: '#FFF', fontFamily: 'var(--font-num)' }}>$50,000 GTD</strong>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <button 
            onClick={() => setMuted(!muted)}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.75rem' }}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--text-muted)" />}
            {muted ? 'Audio Off' : 'Sound Effects'}
          </button>
          <span>Server: <strong style={{ color: '#4ADE80' }}>EU-WEST (16ms)</strong></span>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        gap: '24px'
      }}>
        {/* Brand Logo & Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {/* Brand Wordmark (Single Solid Color, Clean & Timeless per Brand DNA) */}
          <a href="#" className="brand-wordmark" style={{ fontSize: '1.35rem' }}>
            MASSS67
          </a>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: '4px' }}>
            {[
              { id: 'arenas', label: 'Arenas', icon: Gamepad2 },
              { id: 'parties', label: 'Live Parties', icon: Users, badge: '128' },
              { id: 'ranked', label: 'Ranked League', icon: Crown },
              { id: 'pass', label: 'Battle Pass', icon: Flame },
              { id: 'leaderboards', label: 'Leaderboards', icon: Trophy }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id === 'parties' && onOpenParty) onOpenParty();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: 'var(--r-pill)',
                    color: isActive ? '#FFF' : 'var(--text-muted)',
                    background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    border: isActive ? '1px solid var(--border-bright)' : '1px solid transparent',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'all 0.15s ease',
                    cursor: 'pointer'
                  }}
                >
                  <Icon size={15} color={isActive ? '#FFF' : 'currentColor'} />
                  {item.label}
                  {item.badge && (
                    <span className="badge badge-live" style={{ padding: '1px 6px', fontSize: '0.65rem' }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Section: Player Stats & Quick Launch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Player Level & XP */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            padding: '6px 14px',
            borderRadius: 'var(--r-pill)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-ranked" style={{ fontSize: '0.7rem' }}>LVL 42</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-num)' }}>
                  7,850 / 10,000 XP
                </span>
                <div style={{ width: '70px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '78.5%', height: '100%', background: 'var(--accent)' }} />
                </div>
              </div>
            </div>

            <div style={{ width: '1px', height: '18px', background: 'var(--border)' }} />

            {/* Currency (Using clean SVG icons instead of emojis) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', fontFamily: 'var(--font-num)', fontWeight: 600 }}>
              <span style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Coins size={14} color="var(--warning)" /> 14,250
              </span>
              <span style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Gem size={14} color="var(--accent-secondary)" /> 480
              </span>
            </div>
          </div>

          {/* Quick Play CTA */}
          <button 
            className="btn-primary"
            onClick={onOpenQuiz}
          >
            Quick Match
          </button>

          {/* Player Profile Widget */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '4px 10px 4px 4px',
                borderRadius: 'var(--r-pill)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--surface-hover)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                fontWeight: 700,
                color: '#FFF',
                border: '1px solid var(--border-bright)',
                fontSize: '0.82rem'
              }}>
                VX
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFF' }}>Vortex_X</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>GRANDMASTER</span>
              </div>
              <ChevronDown size={14} color="var(--text-muted)" />
            </button>

            {showProfileMenu && (
              <div className="glass-panel" style={{
                position: 'absolute',
                right: 0,
                top: '46px',
                width: '220px',
                borderRadius: 'var(--r-md)',
                padding: '12px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                zIndex: 100
              }}>
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Player Profile</div>
                  <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.85rem' }}>Vortex_X</div>
                </div>
                <button style={{ width: '100%', textAlign: 'left', padding: '8px', borderRadius: '6px', color: '#FFF', fontSize: '0.82rem' }}>Career & Stats</button>
                <button style={{ width: '100%', textAlign: 'left', padding: '8px', borderRadius: '6px', color: '#FFF', fontSize: '0.82rem' }}>Match History</button>
                <button style={{ width: '100%', textAlign: 'left', padding: '8px', borderRadius: '6px', color: '#FFF', fontSize: '0.82rem' }}>Preferences</button>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '8px' }}>
                  <button style={{ width: '100%', textAlign: 'left', padding: '8px', borderRadius: '6px', color: 'var(--danger)', fontSize: '0.82rem' }}>Sign Out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
