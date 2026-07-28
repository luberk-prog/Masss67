import { useMemo, useState } from 'react';

const options = [
  'All',
  'Premier League',
  'World Cup',
  'Champions League',
  'La Liga',
  'Serie A',
  'National Teams',
];

const cards = [
  {
    badge: 'PREMIUM',
    type: 'PREMIER LEAGUE',
    title: 'Tactical Masters: 2024 Season',
    plays: '12.4k Plays',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKsT6mmG4PzMv9YQAiVBHNB12dKrOHSc3v06HV7SW-8ScEouW2n_FqNFwDL8jvCAE0Jh3MC64eqVEsQDbAcI0CMxmJNeCWQcqyiW9o0mQW_yg60TBUWOssuysHCqv-sSAzmkvjyCzqWy3klMHlbUHaxkcDU6DQEGtBW4h4FAFnE1iXYHAzzjsoC0V5dyRAFK_iav3s5yfsOmzViVCPsJxlOUrQF0W7-2IfcbAtCqQl5AqIzEP6MAHmQD33ctIGjedEyFASmjEdAro',
    badgeText: '82 ACTIVE',
  },
  {
    badge: 'FEATURED',
    type: 'WORLD CUP',
    title: 'Legends of the FIFA Finals',
    plays: '8.9k Plays',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALhWqJuDjMeh4xWc5xieB0qdoHpIN-TUrzXeLefzYVzJIVfH-Ffx6sxpWaTYHMSiWyhmyUFlFOsdevrmCBwYQhUdP3rz3RKrqkbFVt-TJX0JE0rsv8wCohTTHwSEJXVvPpDPBxdJgItU4EdMHgit8cXbZZVeb_MHKzkOH4TRR1YeopVfCiwYwrjwUjIwV5QRtZqZl15vRcOqHMjusi4CHhy0gzZ0xZS_dnMON_nsdlJ_P12YTqCHOpcSAaNzpy_lmlEIkp5mtrePo',
    badgeText: 'FEATURED',
  },
  {
    badge: 'PREMIUM',
    type: 'ULTIMATE SQUAD',
    title: 'Transfer Market Intel: Europe',
    plays: '25.1k Plays',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClDvsx_EOPZ-Z6mCYnCzuumDVIdmutCg7CTYHnIw6thp_wBvkT7iYPt9u1732LqYZ74wXtUjneibJLKYzEasbFQh99X96C_CUTxHGXg_80z2I3G80fJlAqyfVYCAqNBjFpgzyepzTO8lo12q8kQogYxLIPr4Mv-FwATiSGrxJnvhkSQoVKfZFYyFHlJJlEQ1CfALyb2wkkTnUzTFieYiSho8-qCMc3GsG9ZeKY851Z46O80STq331GaPVLKqBi7syTNKztZeVS6Io',
  },
  {
    badge: 'CORE',
    type: 'SCIENCE',
    title: 'Science',
    plays: 'Open Access',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg96dnwwKm9so2YYno2z7kZiGKo8YFVFufmhR0kWHr5XSU3xJqKKM0v8CqW-qI1orgtaPKyh__haSUJip91-heIqa0cQwyJJFM_6Qi-Jw2w2OdRfv5vrN6r0YsKEbLXmz30ogcbE8lb25EFZlz5qDaccwqmNmY8lOx-KX2XLTYwx7kXiUMThu2py8vK22HQxQB-evBhq7tcv9I5VygMYTN4La4zhUUuUN2gjLiYZ5kh0pAk2FYIoK6ob6v7_CZYvBZDxyYCHNMWZs',
  },
  {
    badge: 'PREMIUM',
    type: 'HISTORY',
    title: 'History',
    plays: 'Open Access',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnn4FNjdijTa9BA5YP8OG6mK-CQ-SZsOxN1ocR14KLfsEES1JFylNrW7O6Pp51E4GOKoNeyygzB0ZTIlMREZ-KO0RE4fHdupv5FaVH6tQzgC0rdX4NOzMyqjsURrkLcugJRWbupbg0TaFYVQSKPMggdy9NSL-K24JaG2R_63r2dLcg1b6OA14s3Lqo0K203QHahI9ALfrMaZzLJLpdMcnyfdyJqGj2pQxhYX3f3lCSkHaubY_3BSyLtOdP3OBwVtL43QEmovldRyM',
  },
  {
    badge: 'PREMIUM',
    type: 'LEADERSHIP',
    title: "Captain's Armband: Iconic Leaders",
    plays: '14.7k Plays',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa3Zy4kjIzXcaIc3SKAmktZscmKJSgPNtn6S4VxXtI0U3dLHWVUspHgj1t18SQSjqC2FQhs0Ytr7O1Um9abrPsb94U2-DbtADONASt0Aaa3Aelsg4HOPJGwBs4j03AmrJxvL-XdAYyJWb0z_rG08F_tDzO3AZMJjK_sNWC_gatWtu7vhdlb-nhzL5qyH829nS5LcwTjwYbes7TnF3hMMu-7486C2NwzdrygGtdYz2cqjqIJ-fbjebyns-dG8GBZ2TPCrHFT9Npw4',
  },
];

export default function FootballCollectionsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const cardsToRender = useMemo(() => cards, []);

  return (
    <main className="main-content">
      <section className="page-block">
        <div className="section-header">
          <h1 className="section-heading">FOOTBALL COLLECTIONS</h1>
          <p className="section-copy">High-fidelity tactical challenges for the elite strategist. Compete in global lobbies and prove your clinical dominance.</p>
        </div>
      </section>

      <section className="page-block" style={{ borderBottom: '1px solid var(--outline-variant)', paddingBottom: 'var(--stack-md)' }}>
        <div className="filter-bar">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-button${selectedFilter === option ? ' active' : ''}`}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <section className="page-block hero-banner hero-banner--large" style={{ marginBottom: 'var(--stack-lg)' }}>
        <div className="hero-banner__image" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUw2Ho5umgqGtOl-VdiCqCO6Fw6_evG4ULATI_9rO52N4BTBqQ6kXuLyZ0kMiJAenp4ymy0IGRleUlcRuKQ1qXWxyDFUOjzjxYvPj_2Nr2m-qRqS5Xt5Owc6Zl7eGFhEW8nbIjigP38wOR4kE5i6apGtzFY77CE6Jrel4IsncRvPuX_iD2ffs83hfB9FCwqWmQEz9-7wseR_-9ltw9d5un4zXhLCqWCIzKNpof8zpBqV4rMf3vBe6S-4uuad6ARgHeiBQjnThwFiQ')" }} />
        <div className="glass-overlay" />
        <div className="hero-banner__content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--stack-lg)' }}>
          <div className="tag-pill" style={{ marginBottom: 'var(--stack-sm)' }}>LIVE TOURNAMENT</div>
          <h2 className="section-heading" style={{ marginBottom: 'var(--stack-sm)' }}>THE CHAMPIONS CHALLENGE</h2>
          <div style={{ display: 'flex', gap: 'var(--gutter)', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <div className="feature-card__type">PRIZE POOL</div>
              <div style={{ fontSize: 28, color: 'var(--primary)' }}>$15,000.00</div>
            </div>
            <div>
              <div className="feature-card__type">PLAYERS</div>
              <div style={{ fontSize: 28, color: 'var(--text)' }}>1,248 / 2,000</div>
            </div>
            <button className="button-primary" style={{ marginLeft: 'auto' }}>ENTER ARENA</button>
          </div>
        </div>
      </section>

      <div className="collection-grid">
        {cardsToRender.map((card) => (
          <article key={card.title} className="collection-card">
            <div className="collection-card__header">
              <div className="feature-card__image-content" style={{ backgroundImage: `url('${card.image}')`, height: '100%' }} />
              <div className="collection-card__badge">{card.badgeText}</div>
            </div>
            <div className="collection-card__content">
              <div className="feature-card__type">{card.type}</div>
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__meta" style={{ color: 'var(--text-tertiary)' }}>{card.badge === 'CORE' ? 'From quantum mechanics to molecular biology. The ultimate trial.' : ''}</p>
              <div className="collection-card__footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-tertiary)', fontSize: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>groups</span>
                  <span>{card.plays}</span>
                </div>
                <button className="collection-card__button">JOIN MATCH</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="footer-shell" style={{ marginTop: 'var(--stack-lg)' }}>
        <div style={{ color: 'var(--text-tertiary)' }}>© 2024 MASSS67 PERFORMANCE SYSTEMS</div>
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
