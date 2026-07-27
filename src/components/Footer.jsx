import React from 'react';
import { Zap, Wifi } from 'lucide-react';


export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(8, 11, 22, 0.95)',
      borderTop: '1px solid var(--border)',
      marginTop: '80px',
      paddingBottom: '24px'
    }}>
      <div className="content" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        paddingTop: '40px'
      }}>
        {/* Top Footer Content */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap size={18} color="#FFF" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>
                MASSS<span style={{ color: 'var(--primary)' }}>67</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px', maxWidth: '360px' }}>
              The competitive multiplayer quiz gaming platform built for esports players, trivia grandmasters, and party lobbies worldwide.
            </p>
          </div>

          {/* Regional Latency Monitor */}
          <div style={{
            background: 'rgba(17, 24, 39, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4ADE80', fontSize: '0.8rem', fontWeight: 700 }}>
              <Wifi size={14} /> LIVE SERVERS
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-num)' }}>
              <span>EU-CENTRAL: <strong style={{ color: '#4ADE80' }}>16ms</strong></span>
              <span>NA-EAST: <strong style={{ color: '#4ADE80' }}>32ms</strong></span>
              <span>ASIA-PACIFIC: <strong style={{ color: 'var(--warning)' }}>84ms</strong></span>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-dark)'
        }}>
          <div>
            © 2026 MASSS67 Gaming Platform. All Rights Reserved. Not affiliated with third-party logos.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Fair Play & Esports Rules</a>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-num)' }}>v2.4.0 (Build 8904)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
