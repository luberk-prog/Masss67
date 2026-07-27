import React from 'react';
import { Flame, Gift, Clock, Play } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import Card from './ui/Card';

export default function DailyChallenge({ onOpenQuiz }) {
  return (
    <section className="section">
      <div className="content">
        <Card style={{
          padding: '32px 36px',
          borderRadius: 'var(--r-xl)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--r-md)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Flame size={32} color="var(--warning)" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Badge variant="ranked" size="medium">
                  5 DAY STREAK ACTIVE
                </Badge>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-num)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> Resets in 14h 22m
                </span>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF', marginTop: '4px' }}>
                Daily Trivia Gauntlet
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '520px' }}>
                Complete today's mixed discipline gauntlet with 80%+ accuracy to maintain your daily streak bonus and claim the Daily Chest.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)',
              padding: '10px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Gift size={22} color="var(--warning)" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>QUEST REWARD</span>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-num)' }}>+5,000 XP & Chest</span>
              </div>
            </div>

            <Button variant="primary" size="large" onClick={onOpenQuiz}>
              <Play size={16} fill="#FFF" />
              Play Daily Quest
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
