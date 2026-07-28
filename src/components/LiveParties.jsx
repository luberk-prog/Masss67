import React from 'react';
import { Plus, Wifi, ArrowRight } from 'lucide-react';

const LIVE_PARTIES = [
  {
    id: 'lobby-1',
    host: 'ShadowKnight_99',
    hostAvatar: 'SK',
    title: '8-Player Knockout Geography Squad',
    mode: 'Knockout Royale',
    players: '6 / 8',
    ping: '18ms',
    privacy: 'PUBLIC'
  },
  {
    id: 'lobby-2',
    host: 'CyberQueen',
    hostAvatar: 'CQ',
    title: 'Champions League 2026 Ultimate Quiz',
    mode: '1v1 Duel',
    players: '1 / 2',
    ping: '24ms',
    privacy: 'PUBLIC'
  },
  {
    id: 'lobby-3',
    host: 'ByteWizard',
    hostAvatar: 'BW',
    title: 'Full Stack & AI Dev Speedrun',
    mode: 'Team Deathmatch',
    players: '4 / 4',
    ping: '15ms',
    privacy: 'FULL'
  },
  {
    id: 'lobby-4',
    host: 'AncientGamer',
    hostAvatar: 'AG',
    title: 'History Masters Speed Trivia',
    mode: 'Free For All',
    players: '5 / 10',
    ping: '32ms',
    privacy: 'PUBLIC'
  }
];

export default function LiveParties({ onOpenParty }) {
  return (
    <section style={{
      maxWidth: '1520px',
      margin: '40px auto 0',
      padding: '0 32px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--live)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--f-num)' }}>
            <span className="live-dot" /> LIVE PARTIES
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginTop: '4px', fontFamily: 'var(--f-head)' }}>
            Active Party Lobbies
          </h2>
        </div>

        <button
          onClick={onOpenParty}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'var(--f-head)',
            borderRadius: '10px',
            background: 'var(--surface-card)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
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
          <Plus size={16} /> Host Party
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '16px'
      }}>
        {LIVE_PARTIES.map((party) => (
          <div
            key={party.id}
            style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  color: 'var(--text-2)',
                  border: '1px solid var(--border)'
                }}>
                  {party.hostAvatar}
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>HOST: {party.host}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--f-head)' }}>{party.title}</div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '10px',
              padding: '10px 14px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              border: '1px solid var(--border)'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>MODE</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', fontFamily: 'var(--f-num)' }}>{party.mode}</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>SLOTS</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', fontFamily: 'var(--f-num)' }}>{party.players}</div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--f-num)' }}>LATENCY</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--live)', fontFamily: 'var(--f-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Wifi size={12} /> {party.ping}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={`badge ${party.privacy === 'FULL' ? 'badge-ranked' : 'badge-live'}`}>
                {party.privacy}
              </span>

              <button
                disabled={party.privacy === 'FULL'}
                onClick={onOpenParty}
                style={{
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  borderRadius: '8px',
                  background: party.privacy === 'FULL' ? 'rgba(0,196,204,0.1)' : 'var(--accent)',
                  color: party.privacy === 'FULL' ? 'var(--text-2)' : '#FFFFFF',
                  border: 'none',
                  cursor: party.privacy === 'FULL' ? 'default' : 'pointer',
                  opacity: party.privacy === 'FULL' ? 0.5 : 1,
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={e => {
                  if (party.privacy !== 'FULL') {
                    e.currentTarget.style.background = 'var(--accent-hov)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={e => {
                  if (party.privacy !== 'FULL') {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {party.privacy === 'FULL' ? 'Lobby Full' : 'Join Lobby'} <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}