import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Arena', path: '/arena' },
  { label: 'Collections', path: '/collections' },
  { label: 'Rankings', path: '/rankings' },
];

const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'My Performance', path: '/dashboard', icon: 'insights' },
  { label: 'Lobbies', path: '/arena', icon: 'group' },
  { label: 'Market', path: '/collections', icon: 'shopping_cart' },
  { label: 'Account', path: '/rankings', icon: 'person' },
];

export default function AppLayout() {
  return (
    <div className="page-shell">
      <header className="top-nav">
        <div className="top-nav__brand">MASSS67</div>
        <nav className="top-nav__links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `top-nav__link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="top-nav__actions">
          <div className="top-nav__search">
            <span className="material-symbols-outlined">search</span>
            <input placeholder="Search systems..." type="text" />
          </div>
          <button className="top-nav__button">Go Pro</button>
        </div>
      </header>

      <aside className="sidebar">
        <div className="sidebar__panel">
          <div className="sidebar__title">Elite Player</div>
          <div className="sidebar__subtitle">Rank: Grandmaster</div>
        </div>
        <nav className="sidebar__nav">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar__link${isActive ? ' active' : ''}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar__footer">
          <button>Join Tournament</button>
        </div>
      </aside>

      <Outlet />
    </div>
  );
}
