import React from 'react';

export default function SettingsPage() {
  const settings = [
    { label: 'Account Settings', id: 'account' },
    { label: 'Notification Preferences', id: 'notifications' },
    { label: 'Display Settings', id: 'display' },
    { label: 'Privacy & Security', id: 'privacy' },
  ];

  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            Settings
          </h1>
          <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Manage your account and preferences</p>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {settings.map((item) => (
              <button
                key={item.id}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  textAlign: 'left',
                  color: 'var(--text)',
                  fontFamily: 'var(--f-head)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--surface-hover)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--surface-card)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textAlign: 'left',
                color: 'var(--danger)',
                fontFamily: 'var(--f-head)',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--surface-card)';
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}