import { useEffect, useState } from 'react';
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('masss67-theme') || 'dark';
    }
    return 'dark';
  });

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('masss67-sidebar') === 'collapsed';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    root.classList.toggle('theme-dark', theme === 'dark');
    window.localStorage.setItem('masss67-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('masss67-sidebar', sidebarCollapsed ? 'collapsed' : 'expanded');
  }, [sidebarCollapsed]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const toggleSidebar = () => {
    setSidebarCollapsed((current) => !current);
  };

  return (
    <div className={`page-shell${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
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
          <button className="top-nav__button top-nav__button--toggle" onClick={toggleTheme} type="button" aria-label="Toggle light mode">
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="top-nav__button">Go Pro</button>
        </div>
      </header>

      <aside className="sidebar">
        <div className="sidebar__panel">
          <div>
            <div className="sidebar__title">Elite Player</div>
            <div className="sidebar__subtitle">Rank: Grandmaster</div>
          </div>
          <button
            type="button"
            className="sidebar__toggle"
            onClick={toggleSidebar}
            aria-label={sidebarCollapsed ? 'Expand navigation panel' : 'Collapse navigation panel'}
          >
            <span className="material-symbols-outlined">
              {sidebarCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
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
