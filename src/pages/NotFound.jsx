import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ padding: '56px 0 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '48px 32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '48px', fontWeight: 800, color: 'var(--text)', marginBottom: '16px' }}>
            404
          </h1>
          <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '20px', fontWeight: 600, color: 'var(--text-2)', marginBottom: '24px' }}>
            Page Not Found
          </h2>
          <p style={{ color: 'var(--text-3)', fontSize: '14px', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block', padding: '12px 24px', fontSize: '15px', fontWeight: 600,
              fontFamily: 'var(--f-head)', borderRadius: '10px',
              background: 'var(--accent)', color: '#FFF', border: 'none',
              textDecoration: 'none', cursor: 'pointer',
              transition: 'transform 0.15s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}