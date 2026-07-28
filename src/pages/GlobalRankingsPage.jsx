import { useState } from 'react';

const podium = [
  {
    rank: 2,
    name: 'V_OXEN',
    xp: '1.2M',
    win: '88.4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuUxd9nneXtDdVF_x_14HAggalzlgHsrXEJNmxBxobiNWqD0m__pJVpUL5zwEL7qMdW41G83hs95cjDsDoiuTkMvw3HO9-mIOowsCZRn70BvqyDng9OU6AmDRyrzWNk5k6Pxf0ZvozdlQ1kgyixkYfGQ6zv3XSKk_Sb80wz74oPkV1ZoWfWSntBCWeAx9wB9W3XefGPdnUDIs5surXAqEzCkKpYI3UUmgy0WBM_PsW99RqMN0B3s0_GUd64TUr9WIVT7SN4ywlksc',
    badgeColor: 'rgba(255,255,255,0.3)',
    badgeTextColor: '#ffffff',
    badgeBg: '#3b3b3b',
  },
  {
    rank: 1,
    name: 'KRONOS_X',
    xp: '2.8M',
    win: '96.2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZmJwN2EjUjMIzYRCtciHxIEpFt93EEqb5D7u7i9W6WYr_P8ct3uFGSytapCN1qRhkL-sdt7a6CQi1tSPNQGXRz5n_VCnY-T6YGKNOm_Foip9nQBxnnMOJO6xM-Um2V5yBfvgcKIuHbtLYxQ01YTpodOI00bIwYsc15cqAuxn1ddT0sbAuDYkrBi91ZsSzT0Z_HLR4ViOc0wzIXZw-x0ABG3u_07bE8eQk3jjMfSySsk37e9_h29zl2FCz9lzXwY0BYWBI_LeEEc0',
    badgeColor: 'var(--primary-container)',
    badgeTextColor: 'var(--on-primary-container)',
    badgeBg: 'var(--primary-container)',
  },
  {
    rank: 3,
    name: 'ZERO_SIGNAL',
    xp: '940K',
    win: '84.1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbllSXcaDSkyuHzTTbr9BfXtQ99qlU4OJjIeiImOwLqtQUwY7qhSQudJ6F8irMlpwyNFuJGl5uiMYEJ-PRRY55kSfB0ayvlNeG-u3IT3fxl92r52V2Cfff0FEujBlbcxDvB28id4PK6dRgC3bgIf1L6842fCjfYu5gkv0otmkGNN6ETIkfXTbAWjSD0mMFP0aXrr6O62zSdzxRxUNyKUaYtgmE2lwJrw6VGTaypIpFmJffzHgK4XjHpiwFItO0lb16hhxuxjLU7dw',
    badgeColor: 'rgb(255,191,0)',
    badgeTextColor: '#ffffff',
    badgeBg: 'rgb(255,191,0)',
  },
];

const rows = [
  { rank: '04', name: 'CYBER_PHANTOM', status: 'PRO', accuracy: '92.4%', streak: 'W24', xp: '812,400', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOCiYrmmk_TUTN41EwexBb1y8QgqAApPiT6nf4WpmWiVi75_yLW2OWqRjG1hZnuKR-QmsD4l4S3uza85m222QYnhFIQgsaxXg4p3GBM0yrR8cknixIXha33Wim7LczTgucH3FUEvjiLTQJo6dl64DZqDU2lRUJUOgRyUFfffuWR0PAp561Bd9t1kBmDD3BhR8y7d-FvmUmhV90joIJ_508valZBrdOZiZ4f3eqtqyBmG1MeuZ3vA1yJAn4pYxZaYfc5GGJgxxOgWI' },
  { rank: '05', name: 'NEURAL_DRIFT', status: '', accuracy: '91.8%', streak: 'W12', xp: '788,210', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4BFM1vseyAXixZNswIu2_zXiR64Imq5RMJqyj_VCP-w5BIX2OXs5J3KSQmjzyVAsMSktuZ7EexGFBDIv7JEJkya28DiyK8YB_ZKQSxIDQuFoJaddUli-OeDTv1SmSpUT9FMYByjkpEq4ROpU7__LlWPAhkEe_n60PoOBwjeSP9GLJJYC2YlJIvKR2ze1DFN927DbfreUgwlnEg9kHKN9t6doiP6zB0cxsPAF7KIZDUB4DVs6t3Vaowu39TdI6iYq8Oj5c' },
  { rank: '06', name: 'VOID_RUNNER', status: 'L1', accuracy: '89.5%', streak: '', xp: '754,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp-tyjwtgoMltpVSG1w0WyHWQyDHsvV_axBImaQyTH2HyYXRCN_6yoUCUeO84lMEuUnXsQ1G83hs95cjDsDoiuTkMvw3HO9-mIOowsCZRn70BvqyDng9OU6AmDRyrzWNk5k6Pxf0ZvozdlQ1kgyixkYfGQ6zv3XSKk_Sb80wz74oPkV1ZoWfWSntBCWeAx9wB9W3XefGPdnUDIs5surXAqEzCkKpYI3UUmgy0WBM_PsW99RqMN0B3s0_GUd64TUr9WIVT7SN4ywlksc' },
  { rank: '07', name: 'EXO_SUIT', status: '', accuracy: '88.2%', streak: 'W5', xp: '731,900', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-JkVeZIqE4s1HSKOKViT6yOyWPQGSUfnoqu_e4GVMEtjSPn_zxylngoHVrhxk9WFf7_fQPtYiCtpIyYEDc-BiTGJfqbBcQsL-6M-t0aXrFbTbZZNkbRLwWmtemuUNsRp2PigqQsdgPrGnFN2_gRWUqEJgbKXoxtgdd1YNV9MZHntBn6-yv3dE-StkZY2Uzt0dXDQpNMaKu3vhGZAe4rl7JdfGK71sDvm_rCHxhuiGMKErUv8qkzJ0OP0J-XLGboex8V9PLFoZNB0' },
  { rank: '08', name: 'FLUX_CAPACITOR', status: '', accuracy: '87.9%', streak: 'W2', xp: '712,050', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzcSBulZOdN_x-i8KkCThiqfZ8h9aUh0mgEqYcJiaug7gPVE431xfUntflpaA2V_H8TUyHKIpyi4ojaGeRDKW2KbQUV1vpwHX_TyxWGq7y06MFAXwl-F0bh1ciysXwz1s5vOGlkT3INkZlac34UtaqkshiUQRoHymopBXesb8WAUqd1rK6VVnaytWY8qQoEAYwC6gT0LbgC41hufI4AJxIQmwAa1PKQ9mJVI1Dmf8coTPAuy2XZGzkhGIdmc2XAJdpCsUeMVZp9CA' },
];

export default function GlobalRankingsPage() {
  const [clicked, setClicked] = useState(null);

  const handleRowClick = (rank) => {
    setClicked(rank);
    setTimeout(() => {
      setClicked(null);
    }, 200);
  };

  return (
    <main className="main-content">
      <section className="page-block">
        <div className="section-header">
          <h1 className="section-heading" style={{ textTransform: 'uppercase' }}>World Rankings</h1>
          <p className="section-copy" style={{ borderLeft: '2px solid var(--primary-container)', paddingLeft: '16px' }}>The top 1% of the global trivia community.</p>
        </div>
      </section>

      <section className="page-block podium-grid podium-grid--three" style={{ alignItems: 'end', marginBottom: 'var(--stack-lg)' }}>
        {podium.map((player) => (
          <article key={player.rank} className={`podium-card${player.rank === 1 ? ' podium-card--featured' : ''}`} style={{ minHeight: player.rank === 1 ? 340 : 280, justifyContent: 'flex-end' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: player.rank === 2 ? 'rgba(255,255,255,0.5)' : player.rank === 1 ? 'var(--primary-container)' : 'rgba(255,191,0,0.5)' }} />
            {player.rank === 1 && (
              <span className="material-symbols-outlined" style={{ position: 'absolute', top: 16, right: 16, fontSize: 32, color: 'var(--primary-container)', fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            )}
            <div className="podium-card__avatar" style={{ marginBottom: 16, position: 'relative' }}>
              <img src={player.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', background: player.rank === 1 ? 'var(--primary-container)' : player.rank === 2 ? '#3b3b3b' : 'rgb(255,191,0)', color: '#fff', padding: '6px 12px', borderRadius: '9999px', fontSize: 10, fontWeight: 800 }}>{`#${player.rank}`}</div>
            </div>
            <h3 className="headline-md" style={{ marginBottom: 12 }}>{player.name}</h3>
            <div style={{ display: 'flex', gap: 24, color: 'var(--text-tertiary)', textTransform: 'uppercase', fontSize: 11 }}>
              <div>XP <span style={{ color: player.rank === 1 ? 'var(--primary)' : 'var(--text)', fontWeight: 700 }}>{player.xp}</span></div>
              <div>Win % <span style={{ color: player.rank === 1 ? 'var(--primary)' : 'var(--text)', fontWeight: 700 }}>{player.win}</span></div>
            </div>
          </article>
        ))}
      </section>

      <section className="page-block leaderboard-card leaderboard-table">
        <div className="leaderboard-header" style={{ padding: 'var(--stack-lg)', background: '#151515', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--outline-variant)' }}>
          <div className="leaderboard-header__cell" style={{ gridColumn: 'span 1' }}>Rank</div>
          <div className="leaderboard-header__cell" style={{ gridColumn: 'span 5' }}>Player</div>
          <div className="leaderboard-header__cell" style={{ gridColumn: 'span 2', textAlign: 'right' }}>Accuracy</div>
          <div className="leaderboard-header__cell" style={{ gridColumn: 'span 2', textAlign: 'right' }}>Streak</div>
          <div className="leaderboard-header__cell" style={{ gridColumn: 'span 2', textAlign: 'right' }}>Total XP</div>
        </div>
        <div>
          {rows.map((row) => (
            <div
              key={row.rank}
              className="leaderboard-row"
              style={{ background: clicked === row.rank ? 'rgba(255,85,69,0.1)' : 'transparent' }}
              onClick={() => handleRowClick(row.rank)}
            >
              <div style={{ gridColumn: 'span 1', color: 'var(--text-tertiary)' }}>{row.rank}</div>
              <div style={{ gridColumn: 'span 5', display: 'flex', alignItems: 'center', gap: 'var(--stack-md)' }}>
                <div className="leaderboard-row__avatar">
                  <img src={row.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                </div>
                <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>{row.name}</span>
                {row.status && <span className="leaderboard-row__badge">{row.status}</span>}
              </div>
              <div style={{ gridColumn: 'span 2', textAlign: 'right', color: 'var(--text)' }}>{row.accuracy}</div>
              <div style={{ gridColumn: 'span 2', textAlign: 'right', color: 'var(--text)' }}>{row.streak}</div>
              <div style={{ gridColumn: 'span 2', textAlign: 'right', color: 'var(--primary)', fontWeight: 700 }}>{row.xp}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="bottom-context-bar">
        <div className="bottom-context-bar__section">
          <div>
            <div className="bottom-context-bar__label">Current Standing</div>
            <div className="bottom-context-bar__value">RANK #1,429</div>
          </div>
          <div style={{ width: 1, height: 40, background: 'var(--outline-variant)' }} />
          <div>
            <div className="bottom-context-bar__label">Your Accuracy</div>
            <div className="bottom-context-bar__value" style={{ color: 'var(--primary)' }}>76.4%</div>
          </div>
          <div style={{ width: 1, height: 40, background: 'var(--outline-variant)' }} />
          <div>
            <div className="bottom-context-bar__label">To Next Tier</div>
            <div className="bottom-context-bar__value">14,200 XP</div>
          </div>
        </div>
        <div className="bottom-context-bar__status">
          <span className="status-dot" style={{ width: 6, height: 6 }} />
          <span>LIVE SESSION ACTIVE</span>
        </div>
        <button className="button-primary" style={{ padding: '12px 24px', fontSize: 12, letterSpacing: '0.1em' }}>ENTER ARENA</button>
      </div>

      <footer className="footer-shell" style={{ marginTop: 'var(--stack-lg)' }}>
        <div style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>© 2024 MASSS67 PERFORMANCE SYSTEMS</div>
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
