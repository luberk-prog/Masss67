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
      maxWidth: '1600px',
      margin: '40px auto',
      padding: '0 24px'
    }}>
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ADE80', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em' }}>
            <span className="live-dot" /> MULTIPLAYER LOBBIES
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
            Active Party Lobbies
          </h2>
        </div>

        <button className="btn-secondary" onClick={onOpenParty} style={{ fontSize: '0.85rem' }}>
          <Plus size={15} /> Host Party Lobby
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '20px'
      }}>
        {LIVE_PARTIES.map((party) => (
          <div
            key={party.id}
            className="game-card"
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--surface-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  fontWeight: 700,
                  color: '#FFF',
                  border: '1px solid var(--border-bright)'
                }}>
                  {party.hostAvatar}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>HOST: {party.host}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF' }}>{party.title}</div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--r-sm)',
              padding: '10px 14px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              border: '1px solid var(--border)'
            }}>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>MODE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFF' }}>{party.mode}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>SLOTS</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-num)' }}>{party.players}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>LATENCY</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4ADE80', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Wifi size={12} /> {party.ping}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={`badge ${party.privacy === 'FULL' ? 'badge-ranked' : 'badge-live'}`}>
                {party.privacy}
              </span>

              <button
                className="btn-primary"
                disabled={party.privacy === 'FULL'}
                onClick={onOpenParty}
                style={{
                  padding: '7px 18px',
                  fontSize: '0.8rem',
                  opacity: party.privacy === 'FULL' ? 0.4 : 1
                }}
              >
                {party.privacy === 'FULL' ? 'Lobby Full' : 'Join Lobby'} <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
