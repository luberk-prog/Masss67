import React from 'react';
import { Check, Trophy, Users } from 'lucide-react';
import { PROFILE } from '../data';

export default function ProfilePage() {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '20px',
              flexShrink: 0,
            }}>{PROFILE.avatar}</div>

            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
                {PROFILE.name}
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '16px' }}>{PROFILE.title}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>{PROFILE.level}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>Level</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{PROFILE.quizzesCompleted}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>Quizzes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{PROFILE.winRate}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>Win Rate</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
                  Earned Badges
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {PROFILE.badges.filter(b => b.earned).map(badge => (
                    <span
                      key={badge.id}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: 'rgba(250, 204, 16, 0.15)',
                        border: '1px solid rgba(250, 204, 16, 0.3)',
                        borderRadius: '999px',
                        fontSize: '12px',
                        color: '#F59E0B',
                        fontFamily: 'var(--f-num)',
                        fontWeight: 600,
                      }}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
            Recent Activity
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {PROFILE.recentActivity.map((item, i) => {
              const Icon = item.type === 'completed' ? Check : item.type === 'won' ? Trophy : Users;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: 'var(--bg-2)',
                    borderRadius: '10px',
                    fontSize: '13px',
                    color: 'var(--text-2)',
                    fontFamily: 'var(--f-num)',
                  }}
                >
                  <Icon size={12} color="var(--accent)" />
                  <span style={{ color: 'var(--text)' }}>{item.title}</span>
                  <span style={{ color: 'var(--text-3)', marginLeft: 'auto' }}>({item.time})</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}