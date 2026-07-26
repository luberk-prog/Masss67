import React, { useState } from 'react';
import { X, Crown, Copy, Send, Play } from 'lucide-react';

const INITIAL_PLAYERS = [
  { id: 1, name: 'Vortex_X (You)', isHost: true, isReady: true, avatar: 'VX', rank: 'GRANDMASTER' },
  { id: 2, name: 'ShadowKnight_99', isHost: false, isReady: true, avatar: 'SK', rank: 'DIAMOND III' },
  { id: 3, name: 'CyberQueen', isHost: false, isReady: true, avatar: 'CQ', rank: 'PLATINUM I' },
  { id: 4, name: 'AstroGeek_X', isHost: false, isReady: false, avatar: 'AG', rank: 'GOLD II' }
];

export default function PartyLobbyModal({ onClose, onLaunchMatch }) {
  const [players] = useState(INITIAL_PLAYERS);

  const [chatMsg, setChatMsg] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'System', text: 'Party Lobby created. Region: EU-WEST (16ms)' },
    { sender: 'ShadowKnight_99', text: 'Yo! Ready to roll on geography!' },
    { sender: 'CyberQueen', text: 'Set round time to 10s for max speed!' }
  ]);
  const [copied, setCopied] = useState(false);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatMsg.trim()) return;
    setChatLog((prev) => [...prev, { sender: 'Vortex_X', text: chatMsg }]);
    setChatMsg('');
  };

  const copyCode = () => {
    navigator.clipboard.writeText('MASSS67-PARTY-9401');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{
        width: '940px',
        maxWidth: '95vw',
        borderRadius: 'var(--r-xl)',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(0, 216, 255, 0.25)',
        border: '1px solid var(--border-accent)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--text-muted)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Lobby Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="badge badge-live">
                <span className="live-dot" /> LOBBY #M67-9401
              </span>
              <span className="badge badge-accent">
                8-PLAYER ROYALE
              </span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginTop: '6px' }}>
              CUSTOM PARTY <span style={{ color: 'var(--accent)' }}>LOBBY</span>
            </h2>
          </div>

          <button
            onClick={copyCode}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-bright)',
              borderRadius: 'var(--r-pill)',
              padding: '8px 16px',
              fontSize: '0.8rem',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Copy size={14} /> {copied ? 'Code Copied!' : 'Copy Lobby Code'}
          </button>
        </div>

        {/* Two Column Layout: Player Grid & Chat */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
          {/* Left Column: Joined Players Grid */}
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 700 }}>
              PARTY MEMBERS ({players.length}/8 SLOTS)
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {players.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: p.isHost ? 'var(--primary)' : 'var(--surface-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      fontWeight: 800,
                      color: '#FFF',
                      border: p.isHost ? '2px solid var(--accent)' : '1px solid var(--border)'
                    }}>
                      {p.avatar}
                    </div>

                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {p.name} {p.isHost && <Crown size={14} color="var(--warning)" />}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{p.rank}</div>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.75rem', color: p.isReady ? '#4ADE80' : 'var(--warning)', fontWeight: 700 }}>
                    {p.isReady ? 'READY' : 'WAITING'}
                  </span>
                </div>
              ))}

              {/* Empty Slots */}
              {Array.from({ length: 8 - players.length }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed var(--border)',
                    borderRadius: 'var(--r-md)',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    color: 'var(--text-dark)',
                    fontSize: '0.8rem'
                  }}
                >
                  + Invite Player
                </div>
              ))}
            </div>

            {/* Launch Match Button */}
            <button
              className="btn-primary"
              onClick={onLaunchMatch}
              style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}
            >
              <Play size={18} fill="#FFF" /> START MULTIPLAYER MATCH
            </button>
          </div>

          {/* Right Column: Lobby Chat */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            height: '320px'
          }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
              PARTY CHAT
            </div>

            {/* Chat Messages Feed */}
            <div style={{ overflowY: 'auto', flex: 1, margin: '12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chatLog.map((c, idx) => (
                <div key={idx} style={{ fontSize: '0.8rem' }}>
                  <strong style={{ color: c.sender === 'System' ? 'var(--accent)' : 'var(--primary-hover)' }}>{c.sender}: </strong>
                  <span style={{ color: 'var(--text-main)' }}>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendChat} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Type party message..."
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-pill)',
                  padding: '8px 14px',
                  color: '#FFF',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--primary)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#FFF',
                  cursor: 'pointer'
                }}
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
