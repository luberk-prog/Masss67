import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, User } from 'lucide-react';

const NAV_LINKS = [
  { id: 'discover',      label: 'Discover' },
  { id: 'categories',    label: 'Categories' },
  { id: 'parties',       label: 'Parties' },
  { id: 'leaderboards',  label: 'Leaderboards' },
];

export default function Navbar({ onOpenQuiz, onOpenParty }) {
  const [active, setActive]         = useState('discover');
  const [scrolled, setScrolled]     = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  /* Add a subtle background tint on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: 'calc(100% - 48px)',
      maxWidth: '1280px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        padding: '10px 20px',
        borderRadius: '16px',
        background: scrolled
          ? 'rgba(14,17,24,0.92)'
          : 'rgba(14,17,24,0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0,0,0,0.4)'
          : '0 4px 16px rgba(0,0,0,0.2)',
        transition: 'background 0.2s ease, box-shadow 0.2s ease',
      }}>

        {/* ── Left: Wordmark ── */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--f-head)',
            fontWeight: 800,
            fontSize: '18px',
            letterSpacing: '-0.5px',
            color: 'var(--text)',
            flexShrink: 0,
          }}
        >
          MASSS67
        </a>

        {/* ── Center: Nav Links + Search ── */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          {NAV_LINKS.map(link => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActive(link.id);
                  if (link.id === 'parties' && onOpenParty) onOpenParty();
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'var(--f-head)',
                  color: isActive ? 'var(--text)' : 'var(--text-3)',
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-2)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-3)';
                }}
              >
                {link.label}
              </button>
            );
          })}

          {/* Search button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--f-head)',
              color: 'var(--text-3)',
              background: 'transparent',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-2)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
          >
            <Search size={15} />
            Search
          </button>
        </nav>

        {/* ── Right: Profile + Play Now ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

          {/* Profile Avatar */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setProfileOpen(prev => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 10px 5px 5px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Avatar circle */}
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <User size={14} color="#fff" />
              </div>
              <span style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text)',
                fontFamily: 'var(--f-head)',
              }}>
                Vortex_X
              </span>
              <ChevronDown
                size={13}
                color="var(--text-3)"
                style={{
                  transform: profileOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                minWidth: '180px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '6px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                zIndex: 200,
              }}>
                {['Profile', 'Match History', 'Settings', 'Sign Out'].map((item, i) => (
                  <button
                    key={item}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '9px 12px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: i === 3 ? 'var(--danger)' : 'var(--text-2)',
                      transition: 'all 0.12s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      if (i !== 3) e.currentTarget.style.color = 'var(--text)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = i === 3 ? 'var(--danger)' : 'var(--text-2)';
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Play Now CTA */}
          <button
            className="btn btn-primary"
            onClick={onOpenQuiz}
            style={{ padding: '9px 20px', fontSize: '14px' }}
          >
            Play Now
          </button>
        </div>
      </div>
    </header>
  );
}
