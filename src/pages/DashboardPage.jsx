import { useEffect } from 'react';

export default function DashboardPage() {
  useEffect(() => {
    const bars = document.querySelectorAll('.progress-fill');
    bars.forEach((bar) => {
      const target = bar.getAttribute('data-target');
      if (target) {
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = target;
        }, 300);
      }
    });

    const dots = document.querySelectorAll('.status-dot');
    const interval = setInterval(() => {
      dots.forEach((dot) => {
        dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="main-content">
      <section className="page-block">
        <div className="section-header">
          <h1 className="section-heading">Good Evening, <span style={{ color: 'var(--primary)' }}>Viper_Core</span></h1>
          <p className="section-copy">Operational efficiency is at 94.2%. Systems stabilized for competitive entry.</p>
        </div>
      </section>

      <div className="card-grid" style={{ gridTemplateColumns: '1fr', gap: 'var(--gutter)' }}>
        <div className="card-panel" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--gutter)' }}>
          <div className="grid-3" style={{ gap: 'var(--base)' }}>
            <div className="stats-card">
              <div className="stat-card__label">
                <span>Win Rate</span>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>trending_up</span>
              </div>
              <div className="stat-card__value">68.4<span style={{ fontSize: '18px', color: 'var(--text-tertiary)' }}>%</span></div>
              <div className="progress-track">
                <div className="progress-fill" data-target="68.4%" />
              </div>
            </div>
            <div className="stats-card">
              <div className="stat-card__label">
                <span>Total XP</span>
                <span className="material-symbols-outlined" style={{ color: 'var(--text-tertiary)' }}>military_tech</span>
              </div>
              <div className="stat-card__value">1.2M</div>
              <div className="progress-track">
                <div className="progress-fill" data-target="45%" style={{ background: 'var(--text)' }} />
              </div>
            </div>
            <div className="stats-card">
              <div className="stat-card__label">
                <span>Rank Delta</span>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>arrow_upward</span>
              </div>
              <div className="stat-card__value">+420<span style={{ fontSize: '18px', color: 'var(--text-tertiary)' }}>pts</span></div>
              <div style={{ marginTop: '16px', color: 'var(--primary)', fontFamily: 'Inter', fontWeight: 500, textTransform: 'uppercase' }}>Ascending: Grandmaster II</div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-block card-panel">
        <div className="card-panel-header">
          <h3 className="label-caps" style={{ letterSpacing: '0.18em' }}>Cognitive Protocols (Active Quizzes)</h3>
          <span className="material-symbols-outlined" style={{ color: 'var(--text-tertiary)', fontSize: 20 }}>info</span>
        </div>
        <div className="card-panel-body" style={{ display: 'grid', gap: 'var(--stack-md)' }}>
          <div className="panel-card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--stack-md)' }}>
            <div style={{ width: 64, height: 48, background: 'var(--surface-container-highest)', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNzXcqP076E8bbHsnJnDoOfMRwComnBnvdWPzzRT2QxuI72eeRC-k4vbdYDyvSwQTme-W0ByuFGbvswlETRgU13IvMH0drI6c_HnRCabJmWiLMFqqTgHyY5yTn9KdGdsNktsVTK8FfA8pHCoydy0egBqnCGtenoFREBsXuD996v2eA4AfsQ4V-IRjCAoO0shXHDcts45ogg86rt20o3vF9sNT_Lxw4VcrWCT9e-Bmj3Ddxymk3kGGW2kszII_T5e80iF7iuQXB7yo')", transition: 'filter 0.5s ease' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 700 }}>Tactical Spatial Awareness IV</span>
                <span style={{ color: 'var(--primary)', fontFamily: 'Inter', fontWeight: 500 }}>75%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" data-target="75%" />
              </div>
            </div>
            <button style={{ padding: 8, border: '1px solid var(--outline-variant)', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>play_arrow</span>
            </button>
          </div>
          <div className="panel-card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--stack-md)', opacity: 0.6 }}>
            <div style={{ width: 64, height: 48, background: 'var(--surface-container-highest)', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-xZBg2dznBxmZS7l5c1ji0_6Sb_smcuGwVYBcnOfABJJoz5mL3hlJe6WEJjwx7mBh9BqUK8X5Z2eomjNHi5T0pXUoFmIPwkEFQYn5eSq0CYTOjhau8AVGVI6i6a_S4omgPh_NgqZmG4nH8SCS0ljfJBrYjEz_HG5JijmnSKxPykXH_WfaHcV8DfaxLbBto2yUhSeKmCEU')" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 700 }}>Reactive Response Tuning</span>
                <span style={{ color: 'var(--text)', fontFamily: 'Inter', fontWeight: 500 }}>100%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" data-target="100%" style={{ background: '#FFFFFF' }} />
              </div>
            </div>
            <button style={{ padding: 8, border: '1px solid var(--outline-variant)', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified</span>
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--gutter)', marginTop: 'var(--gutter)' }}>
        <div className="card-panel" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="glass-overlay" />
          <div className="card-panel-body" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24, color: 'var(--text-tertiary)' }}>Latest Achievement</div>
            <div style={{ width: 128, height: 128, margin: '0 auto 24px', border: '2px solid var(--primary)', display: 'grid', placeItems: 'center', background: 'var(--surface)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--primary)' }}>hotel_class</span>
            </div>
            <h4 className="headline-md" style={{ marginBottom: 8 }}>UNSTOPPABLE</h4>
            <p className="mono-data" style={{ color: 'var(--text-tertiary)', padding: '0 var(--stack-lg)' }}>Completed 10 consecutive flawless matches in Elite Arena.</p>
          </div>
          <div style={{ height: 4, background: 'var(--primary)', width: '100%' }} />
        </div>

        <div className="card-panel">
          <div className="card-panel-header">
            <h3 className="label-caps" style={{ letterSpacing: '0.18em' }}>Network Status</h3>
            <span className="mono-data" style={{ color: 'var(--text-tertiary)' }}>3 ONLINE</span>
          </div>
          <div style={{ display: 'grid', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { name: 'Xenon_77', status: 'In Lobby', statusColor: 'var(--primary)', online: true },
              { name: 'Ghost_Rider', status: 'In Lobby', statusColor: 'var(--primary)', online: true },
              { name: 'Mave_Rick', status: 'Away', statusColor: 'var(--surface-variant)', online: false },
            ].map((player) => (
              <div key={player.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--stack-md)', borderBottom: '1px solid rgba(255,255,255,0.08)', transition: 'background 0.2s ease', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--stack-md)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '9999px', border: '1px solid var(--outline-variant)', display: 'grid', placeItems: 'center', background: 'var(--surface-container-highest)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{player.name}</div>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: 'var(--text-tertiary)', fontSize: 10, textTransform: 'uppercase', fontWeight: 700 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '9999px', background: player.statusColor, display: 'inline-block' }} />
                      <span>{player.status}</span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--text-tertiary)', opacity: player.online ? 1 : 0.4 }}>chat_bubble_outline</span>
              </div>
            ))}
          </div>
          <button style={{ width: '100%', padding: '16px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 700, borderTop: '1px solid rgba(255,255,255,0.08)', background: 'transparent', cursor: 'pointer' }}>Expand Contact List</button>
        </div>
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
