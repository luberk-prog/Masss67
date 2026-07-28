import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        md: { flexDirection: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 48px',
        backgroundColor: 'var(--surface-container-lowest)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-3)',
        marginBottom: '24px',
      }}>
        © 2024 MASSS67 PERFORMANCE SYSTEMS
      </div>

      <div style={{ display: 'flex', gap: '6rem' }}>
        <a
          href="#"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-3)',
            textDecoration: 'underline',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-3)'; }}
        >
          Privacy Policy
        </a>
        <a
          href="#"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-3)',
            textDecoration: 'underline',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-3)'; }}
        >
          Terms of Service
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-3)' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#22C55E',
          }}></div>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
            Server Status: Operational
          </span>
        </div>
      </div>
    </footer>
  );
}