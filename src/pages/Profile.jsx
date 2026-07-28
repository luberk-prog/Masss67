import React from 'react';
import { Check, Trophy, Users } from 'lucide-react';
import { PROFILE } from '../data';

export default function Profile() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)', marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#FFF', fontWeight: 800, fontSize: '20px'
            }}>{PROFILE.avatar}</div>

            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>
                {PROFILE.name}
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '16px' }}>{PROFILE.title}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>{PROFILE.level}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Level</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{PROFILE.quizzesCompleted}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Quizzes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--f-num)', fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{PROFILE.winRate}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Win Rate</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Progress to Level {PROFILE.level + 1}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <div style={{
                    background: 'var(--accent)', color: '#FFF', fontSize: '11px',
                    padding: '4px 8px', borderRadius: 'var(--r-pill)', fontFamily: 'var(--f-head)'
                  }}>
                    {PROFILE.badges.filter(b => b.earned).map(badge => (
                      <span key={badge.id}>{badge.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Recent Activity</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {PROFILE.recentActivity.map((item, i) => {
              const Icon = item.type === 'completed' ? Check : item.type === 'won' ? Trophy : Users;
              return (
                <span key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '4px 10px', background: 'var(--bg-2)',
                  borderRadius: 'var(--r-pill)', fontSize: '12px',
                  color: 'var(--text-2)', fontFamily: 'var(--f-num)', marginBottom: '8px'
                }}>
                  <Icon size={12} />
                  {item.title}
                  <span style={{ color: 'var(--text-3)', marginLeft: '4px' }}>({item.time})</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}