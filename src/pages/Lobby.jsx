import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZ } from '../data';

export default function Lobby() {
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/results');
    } else {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
          <h1 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
            {QUIZ.title}
          </h1>
          <p style={{ color: 'var(--text-3)', marginBottom: '24px', fontFamily: 'var(--f-num)' }}>
            {QUIZ.questions} questions • {QUIZ.timeLimit}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              fontWeight: 700,
              fontSize: '18px',
              fontFamily: 'var(--f-num)',
            }}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
            <div>
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  borderRadius: '12px',
                  background: 'var(--accent)',
                  color: '#FFF',
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
                Start Quiz
              </button>
            </div>
          </div>

          <a href="/results" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-num)' }}>
            Skip to Results
          </a>
        </div>
      </div>
    </section>
  );
}