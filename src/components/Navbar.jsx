import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Arena', path: '/' },
  { id: 'collections', label: 'Collections', path: '/collections' },
  { id: 'rankings', label: 'Rankings', path: '/leaderboards' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 48px',
        height: '64px',
        transition: 'all 0.2s ease',
        background: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div style={{
        fontFamily: 'Montserrat, system-ui, sans-serif',
        fontSize: '40px',
        fontWeight: 800,
        color: 'var(--text)',
        letterSpacing: '-0.03em',
      }}>
        MASSS67
      </div>

      <nav style={{ display: 'none', flexDirection: 'row', gap: '6rem', alignItems: 'center' }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-2)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{
          display: 'none',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'var(--surface-container-lowest)',
          height: '32px',
          width: '192px',
          padding: '0 12px',
          gap: '0.5rem',
        }}>
          <Search size={18} color="var(--text-2)" />
          <input
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              outline: 'none',
              width: '100%',
            }}
            placeholder="Search systems..."
            type="text"
          />
        </div>

        <button
          style={{
            background: 'var(--primary-container)',
            color: 'var(--on-primary-container)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '12px 48px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          Go Pro
        </button>

        <button
          style={{ display: 'none' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} color="var(--text-2)" />
        </button>
      </div>
    </header>
  );
}