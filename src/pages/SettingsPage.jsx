import React from 'react';

export default function SettingsPage() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>
            Settings
          </h1>
          <p style={{ color: 'var(--text-3)' }}>Manage your account and preferences</p>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{
              width: '100%', padding: '14px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)', textAlign: 'left',
              color: 'var(--text)', fontFamily: 'var(--f-head)', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.15s ease'
            }}>
              Account Settings
            </button>
            <button style={{
              width: '100%', padding: '14px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)', textAlign: 'left',
              color: 'var(--text)', fontFamily: 'var(--f-head)', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.15s ease'
            }}>
              Notification Preferences
            </button>
            <button style={{
              width: '100%', padding: '14px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)', textAlign: 'left',
              color: 'var(--text)', fontFamily: 'var(--f-head)', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.15s ease'
            }}>
              Display Settings
            </button>
            <button style={{
              width: '100%', padding: '14px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)', textAlign: 'left',
              color: 'var(--text)', fontFamily: 'var(--f-head)', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.15s ease'
            }}>
              Privacy & Security
            </button>
            <button style={{
              width: '100%', padding: '14px 16px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-sm)', textAlign: 'left',
              color: 'var(--danger)', fontFamily: 'var(--f-head)', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.15s ease'
            }}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}