import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '64px 0',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '64px 48px',
          boxShadow: 'var(--shadow-md)',
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '64px', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            404
          </h1>
          <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '20px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '24px' }}>
            Page Not Found
          </h2>
          <p style={{ color: 'var(--text-3)', fontSize: '14px', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.5 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'var(--f-head)',
              borderRadius: '12px',
              background: 'var(--accent)',
              color: '#FFF',
              border: 'none',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-hov)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}