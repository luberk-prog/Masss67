import React from 'react';
import { History, Users, Hash, CalendarCheck, Shuffle } from 'lucide-react';

const ACTIONS = [
  { id: 'continue',  icon: History,       label: 'Continue Playing',  sub: 'Resume where you left off' },
  { id: 'create',    icon: Users,         label: 'Create Party',       sub: 'Invite friends to play'    },
  { id: 'join',      icon: Hash,          label: 'Join by Code',       sub: 'Enter a room code'         },
  { id: 'daily',     icon: CalendarCheck, label: 'Daily Challenge',    sub: 'New every 24 hours'        },
  { id: 'random',    icon: Shuffle,       label: 'Random Quiz',        sub: 'Surprise me'               },
];

export default function QuickActions({ onOpenQuiz, onOpenParty }) {
  return (
    <section style={{ padding: '0 32px', marginTop: '-1px' }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '32px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}>
        {ACTIONS.map(action => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => {
                if (action.id === 'create') onOpenParty?.();
                else if (action.id === 'random' || action.id === 'continue' || action.id === 'daily') onOpenQuiz?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 20px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                textAlign: 'left',
                minWidth: '180px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--surface-hover)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--surface-card)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0,196,204,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={16} color="var(--accent)" />
              </div>
              <div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  fontFamily: 'var(--f-head)',
                  lineHeight: 1.2,
                }}>
                  {action.label}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-3)',
                  marginTop: '3px',
                }}>
                  {action.sub}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}