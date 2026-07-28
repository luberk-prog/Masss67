import React from 'react';
import { Flame, Gift, Clock, Play } from 'lucide-react';

export default function DailyChallenge({ onOpenQuiz }) {
  return (
    <section style={{ padding: '0 32px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <div style={{
          padding: '32px 36px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, var(--surface-card) 0%, var(--bg-2) 100%)',
          border: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Flame size={32} color="#F59E0B" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  background: 'rgba(250, 204, 16, 0.15)',
                  border: '1px solid rgba(250, 204, 16, 0.3)',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#F59E0B',
                  fontFamily: 'var(--f-num)',
                  letterSpacing: '0.05em',
                }}>
                  5 DAY STREAK ACTIVE
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--f-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> Resets in 14h 22m
                </span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginTop: '4px', fontFamily: 'var(--f-head)' }}>
                Daily Trivia Gauntlet
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: '14px', maxWidth: '520px', lineHeight: 1.5 }}>
                Complete today's mixed discipline gauntlet with 80%+ accuracy to maintain your daily streak bonus and claim the Daily Chest.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '10px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Gift size={22} color="#F59E0B" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>QUEST REWARD</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--f-num)' }}>+5,000 XP & Chest</span>
              </div>
            </div>

            <button
              onClick={onOpenQuiz}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'var(--f-head)',
                borderRadius: '10px',
                background: 'var(--accent)',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hov)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Play size={16} fill="#FFF" stroke="none" />
              Play Daily Quest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}