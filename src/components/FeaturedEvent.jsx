import React from 'react';
import { Play, Users, Trophy, Flame, Globe2, Clock } from 'lucide-react';

export default function FeaturedEvent({ onOpenQuiz, onOpenParty }) {
  return (
    <section style={{
      maxWidth: '1600px',
      margin: '24px auto',
      padding: '0 24px'
    }}>
      <div style={{
        position: 'relative',
        borderRadius: 'var(--r-xl)',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle Background Cover Art Representation */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          background: 'linear-gradient(90deg, var(--card) 0%, rgba(20, 26, 46, 0.4) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '40px 48px',
          maxWidth: '750px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span className="badge badge-live">
              <span className="live-dot" /> 4,892 PLAYERS LIVE
            </span>
            <span className="badge badge-ranked">
              <Flame size={12} /> FEATURED ARENA
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Trophy size={13} color="var(--warning)" /> 100,000 XP Prize Pool
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 style={{
              fontSize: '2.6rem',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '10px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}>
              Global Mapmaster & Geography Royale
            </h1>
            <p style={{
              fontSize: '0.98rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '620px'
            }}>
              Identify real-world satellite coordinates, landmarks, capital cities, and cultural landscapes in high-speed 10-second knockout rounds. Outsmart 7 competitors in real-time.
            </p>
          </div>

          {/* Mode Specs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', padding: '6px 14px', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
              <Globe2 size={16} color="var(--accent-secondary)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>8-Player Knockout</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', padding: '6px 14px', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
              <Clock size={16} color="var(--text-muted)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-num)' }}>10s Speed Timer</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px' }}>
            <button className="btn-primary" onClick={onOpenQuiz} style={{ fontSize: '0.92rem', padding: '12px 28px' }}>
              <Play size={16} fill="#FFF" /> Join Arena Match
            </button>
            <button className="btn-secondary" onClick={onOpenParty} style={{ fontSize: '0.92rem', padding: '12px 24px' }}>
              <Users size={16} /> Create Party Lobby
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div style={{
          position: 'absolute',
          right: '48px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '380px',
          borderRadius: 'var(--r-lg)',
          border: '1px solid var(--border)',
          background: 'rgba(17, 24, 39, 0.95)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>LIVE MATCH STATUS</span>
            <span style={{ fontSize: '0.75rem', color: '#4ADE80', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="live-dot" /> MATCH #9401
            </span>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CURRENT ROUND (4 / 8)</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFF', marginTop: '4px' }}>
              "Which European capital city features this historical citadel?"
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Leader:</span>
            <span style={{ color: '#FFF', fontWeight: 700, fontFamily: 'var(--font-num)' }}>
              ApexPredictor (4,920 pts)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
