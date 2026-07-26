import React, { useState, useEffect, useCallback } from 'react';
import { X, Clock, Flame, Trophy, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    category: 'GEOGRAPHY & LANDMARKS',
    question: 'Which historical European capital is home to the Acropolis citadel built in the 5th century BC?',
    options: ['Rome, Italy', 'Athens, Greece', 'Valletta, Malta', 'Lisbon, Portugal'],
    correct: 1,
    time: 10,
    hint: 'Famous for ancient Greek philosophy and democracy.'
  },
  {
    id: 2,
    category: 'WORLD FOOTBALL',
    question: 'Which club won the UEFA Champions League title in 2024 at Wembley Stadium?',
    options: ['Real Madrid', 'Borussia Dortmund', 'Manchester City', 'Bayern Munich'],
    correct: 0,
    time: 10,
    hint: 'Record 15-time European Champions.'
  },
  {
    id: 3,
    category: 'TECH & AI FRONTIER',
    question: 'What does LLM stand for in modern Artificial Intelligence architecture?',
    options: ['Linear Logic Machine', 'Large Language Model', 'Linked Learning Matrix', 'Latency-Less Memory'],
    correct: 1,
    time: 10,
    hint: 'Trained on massive datasets to predict tokens.'
  }
];

export default function QuizArenaModal({ onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState(false);

  const currentQ = SAMPLE_QUESTIONS[currentIdx];

  const handleAnswer = useCallback((idx) => {
    if (answered) return;
    setSelectedOpt(idx);
    setAnswered(true);

    const isCorrect = idx === currentQ.correct;
    if (isCorrect) {
      const addedPoints = 1000 + (timeLeft * 50) + (streak * 200);
      setScore((s) => s + addedPoints);
      setStreak((st) => st + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentIdx + 1 < SAMPLE_QUESTIONS.length) {
        setCurrentIdx((i) => i + 1);
        setSelectedOpt(null);
        setAnswered(false);
        setTimeLeft(10);
      } else {
        setGameOver(true);
      }
    }, 1500);
  }, [answered, currentQ.correct, timeLeft, streak, currentIdx]);

  // Timer Countdown
  useEffect(() => {
    if (gameOver || answered) return;

    if (timeLeft === 0) {
      handleAnswer(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver, answered, handleAnswer]);


  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setStreak(0);
    setTimeLeft(10);
    setGameOver(false);
    setAnswered(false);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{
        width: '900px',
        maxWidth: '95vw',
        borderRadius: 'var(--r-xl)',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(108, 77, 255, 0.3)',
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

        {!gameOver ? (
          <div>
            {/* Header Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>
                  {currentQ.category}
                </span>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Round {currentIdx + 1} of {SAMPLE_QUESTIONS.length}
                </div>
              </div>

              {/* Live Timer Gauge */}
              <div style={{
                background: timeLeft <= 3 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${timeLeft <= 3 ? 'var(--danger)' : 'var(--border)'}`,
                padding: '8px 20px',
                borderRadius: 'var(--r-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-num)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: timeLeft <= 3 ? 'var(--danger)' : '#FFF'
              }}>
                <Clock size={20} className={timeLeft <= 3 ? 'animate-glow' : ''} />
                {timeLeft}s
              </div>

              {/* Score & Streak */}
              <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--font-num)' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>SCORE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent)' }}>{score.toLocaleString()} PTS</div>
                </div>
                {streak > 0 && (
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--warning)' }}>STREAK</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Flame size={16} fill="var(--warning)" /> {streak}x
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Question Text */}
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '28px',
              marginBottom: '24px'
            }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', lineHeight: 1.4 }}>
                {currentQ.question}
              </h2>
            </div>

            {/* Multiple Choice Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '24px'
            }}>
              {currentQ.options.map((opt, i) => {
                let btnBg = 'rgba(255, 255, 255, 0.04)';
                let btnBorder = 'var(--border)';
                let textColor = '#FFF';

                if (answered) {
                  if (i === currentQ.correct) {
                    btnBg = 'rgba(34, 197, 94, 0.2)';
                    btnBorder = 'var(--success)';
                    textColor = '#4ADE80';
                  } else if (selectedOpt === i) {
                    btnBg = 'rgba(239, 68, 68, 0.2)';
                    btnBorder = 'var(--danger)';
                    textColor = '#F87171';
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={answered}
                    onClick={() => handleAnswer(i)}
                    style={{
                      background: btnBg,
                      border: `1px solid ${btnBorder}`,
                      borderRadius: 'var(--r-md)',
                      padding: '18px 24px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: textColor,
                      textAlign: 'left',
                      cursor: answered ? 'default' : 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between'
                    }}
                  >
                    <span>{opt}</span>
                    {answered && i === currentQ.correct && <CheckCircle size={20} color="var(--success)" />}
                    {answered && selectedOpt === i && i !== currentQ.correct && <AlertCircle size={20} color="var(--danger)" />}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Victory / Match Results Screen */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--warning) 0%, var(--primary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              margin: '0 auto 20px auto',
              boxShadow: '0 0 40px rgba(245, 158, 11, 0.5)'
            }}>
              <Trophy size={40} color="#FFF" />
            </div>

            <span className="badge badge-live" style={{ fontSize: '0.8rem', padding: '6px 16px' }}>
              VICTORY! VICTORY!
            </span>

            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFF', marginTop: '12px' }}>
              MATCH COMPLETE
            </h1>

            <div style={{
              display: 'flex',
              justify: 'center',
              gap: '32px',
              margin: '28px 0',
              fontFamily: 'var(--font-num)'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>FINAL SCORE</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>{score.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MAX STREAK</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--warning)' }}>{streak}x</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>XP EARNED</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#4ADE80' }}>+2,450 XP</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button className="btn-primary" onClick={restartQuiz} style={{ padding: '12px 28px' }}>
                <RefreshCw size={18} /> Play Again
              </button>
              <button className="btn-secondary" onClick={onClose} style={{ padding: '12px 28px' }}>
                Exit Arena
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
