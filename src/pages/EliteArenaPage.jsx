import { useEffect, useState } from 'react';

const featuredCollections = [
  {
    label: 'PREMIUM',
    title: 'FOOTBALL',
    subtitle: "Tactical knowledge and historical mastery of the world's game.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvndj74mZ2wD9_CB36NyUN8SD_3QQMNsiyYWjbxIgk_YCWyLSX2KMRSFBoVIhn_9MNPLqFmJesbv5dgAZdUm4kVD_th3MYgAA3A-vD8nDrQHJRZcCdjreOYsb9Z2KUZM1oC3F_Cw6kuyKTscsPwISIUjByCVR3nruwyGdKXpZR3Yh7Mts1pqnQJLRX1kUiHr9gjhqQ-I27evBZTZGq1B2LbcAk0SHLHcmqQHE7nDfUExMwDTI7OpAKsLEPg5MvATNBGwMyqlww38',
    accent: 'var(--primary)',
  },
  {
    label: 'CORE',
    title: 'SCIENCE',
    subtitle: 'From quantum mechanics to molecular biology. The ultimate trial.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg96dnwwKm9so2YYno2z7kZiGKo8YFVFufmhR0kWHr5XSU3xJqKKM0v8CqW-qI1orgtaPKyh__haSUJip91-heIqa0cQwyJJFM_6Qi-Jw2w2OdRfv5vrN6r0YsKEbLXmz30ogcbE8lb25EFZlz5qDaccwqmNmY8lOx-KX2XLTYwx7kXiUMThu2py8vK22HQxQB-evBhq7tcv9I5VygMYTN4La4zhUUuUN2gjLiYZ5kh0pAk2FYIoK6ob6v7_CZYvBZDxyYCHNMWZs',
    accent: '#ffffff',
  },
  {
    label: 'PREMIUM',
    title: 'HISTORY',
    subtitle: 'Empire building, strategic warfare, and the lineages of power.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnn4FNjdijTa9BA5YP8OG6mK-CQ-SZsOxN1ocR14KLfsEES1JFylNrW7O6Pp51E4GOKoNeyygzB0ZTIlMREZ-KO0RE4fHdupv5FaVH6tQzgC0rdX4NOzMyqjsURrkLcugJRWbupbg0TaFYVQSKPMggdy9NSL-K24JaG2R_63r2dLcg1b6OA14s3Lqo0K203QHahI9ALfrMaZzLJLpdMcnyfdyJqGj2pQxhYX3f3lCSkHaubY_3BSyLtOdP3OBwVtL43QEmovldRyM',
    accent: 'var(--primary)',
  },
];

export default function EliteArenaPage() {
  const [counters, setCounters] = useState({ live: '14,282', quizzes: '1.2M', lobbies: '842', prize: '$245,000' });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounters({ live: '14,282', quizzes: '1.2M', lobbies: '842', prize: '$245,000' });
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section" style={{ minHeight: '870px', padding: 'var(--stack-lg) 0' }}>
        <div className="section-header" style={{ maxWidth: '840px' }}>
          <h1 className="section-heading" style={{ textTransform: 'uppercase', marginBottom: 'var(--stack-md)' }}>THE ELITE<br />COMPETITIVE ARENA</h1>
          <p className="section-copy" style={{ borderLeft: '2px solid var(--primary-container)', paddingLeft: 'var(--stack-md)', maxWidth: '38rem' }}>The definitive destination for high-stakes multiplayer trivia. Outperform. Outthink. Ascend.</p>
          <div className="hero-banner__actions" style={{ marginTop: 'var(--stack-lg)' }}>
            <button className="button-primary">Enter the Arena</button>
            <button className="button-secondary">Browse Collections</button>
          </div>
        </div>
      </section>

      <section className="page-block" style={{ borderTop: '1px solid var(--outline-variant)', borderBottom: '1px solid var(--outline-variant)', background: 'var(--surface-container-low)', padding: 'var(--stack-lg) 0' }}>
        <div className="hero-stats" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
          <div className="hero-stats__metric">
            <span className="hero-stats__metric-title">Live Competitors</span>
            <span className="hero-stats__metric-value">{counters.live}</span>
          </div>
          <div className="hero-stats__metric">
            <span className="hero-stats__metric-title">Quizzes Completed</span>
            <span className="hero-stats__metric-value">{counters.quizzes}</span>
          </div>
          <div className="hero-stats__metric">
            <span className="hero-stats__metric-title">Global Lobbies</span>
            <span className="hero-stats__metric-value">{counters.lobbies}</span>
          </div>
          <div className="hero-stats__metric">
            <span className="hero-stats__metric-title">Prize Pool</span>
            <span className="hero-stats__metric-value" style={{ color: 'var(--primary)' }}>{counters.prize}</span>
          </div>
        </div>
      </section>

      <section className="page-block" style={{ background: 'var(--bg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ textTransform: 'uppercase', borderLeft: '4px solid var(--primary)', paddingLeft: '16px' }}>Featured Collections</h2>
          <a className="footer-shell__link" href="#">View All</a>
        </div>

        <div className="collection-grid">
          {featuredCollections.map((item) => (
            <article key={item.title} className="collection-card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
              <div className="collection-card__header">
                <div className="feature-card__image-content" style={{ backgroundImage: `url('${item.image}')`, height: '100%' }} />
                <div className="collection-card__badge">{item.label}</div>
              </div>
              <div className="collection-card__content">
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__meta" style={{ opacity: 0.7 }}>{item.subtitle}</p>
                <div className="collection-card__footer">
                  <div className="feature-card__type">{item.label === 'CORE' ? 'OPEN ACCESS' : 'LEVEL 4 CLEARANCE'}</div>
                  <button className="collection-card__button">Explore</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-block" style={{ padding: '96px 0', borderTop: '1px solid var(--outline-variant)', background: '#080808' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ textTransform: 'uppercase', marginBottom: 'var(--stack-md)' }}>ARE YOU PREPARED?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--stack-lg)' }}>
            <button className="button-primary" style={{ padding: '20px 64px' }}>Initiate Sequence</button>
            <a className="footer-shell__link" href="#" style={{ textDecoration: 'underline', color: 'var(--text-tertiary)' }}>Learn More</a>
          </div>
        </div>
      </section>

      <footer className="footer-shell" style={{ marginTop: 'var(--stack-lg)' }}>
        <div>© 2024 MASSS67 PERFORMANCE SYSTEMS</div>
        <div className="footer-shell__links">
          <a className="footer-shell__link" href="#">Privacy Policy</a>
          <a className="footer-shell__link" href="#">Terms of Service</a>
          <div className="footer-shell__status">
            <span className="footer-shell__status-dot" />
            <span>Server Status: Operational</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
