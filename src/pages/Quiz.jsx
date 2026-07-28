import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  { id: 1, text: 'Which team won the 2023 FIFA World Cup?', options: ['Argentina', 'France', 'Brazil', 'Germany'], correct: 1 },
  { id: 2, text: 'Who has the most Ballon d\'Or trophies?', options: ['Lionel Messi', 'Cristiano Ronaldo', 'Pelé', 'Michel Platini'], correct: 0 },
  { id: 3, text: 'What stadium hosted the 2022 World Cup final?', options: ['Lusail Stadium', 'Maracanã', 'Wembley', 'Camp Nou'], correct: 0 },
  { id: 4, text: 'Which club has won the most UEFA Champions League titles?', options: ['Real Madrid', 'AC Milan', 'Liverpool', 'Bayern Munich'], correct: 0 },
  { id: 5, text: 'Who is the all-time top scorer for the Brazil national team?', options: ['Pelé', 'Romário', 'Neymar', 'Ronaldo'], correct: 1 },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const question = QUESTIONS[currentQuestion];

  const handleSubmit = () => {
    if (selected === question.correct) {
      setScore(s => s + 1);
    }

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      navigate('/results', { state: { score, total: QUESTIONS.length } });
    }
  };

  const handleOptionClick = (index) => {
    if (!showAnswer) {
      setSelected(index);
    }
  };

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
        }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--f-num)', fontSize: '13px', color: 'var(--text-3)', marginBottom: '8px' }}>
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </div>
            <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '20px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>
              {question.text}
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showAnswer}
                style={{
                  position: 'relative',
                  width: '100%',
                  padding: '14px 16px',
                  background: selected === index
                    ? (index === question.correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)')
                    : (showAnswer && index === question.correct ? 'rgba(34,197,94,0.15)' : 'var(--bg-2)'),
                  border: selected === index
                    ? (index === question.correct ? '2px solid #22C55E' : '2px solid #EF4444')
                    : '1px solid var(--border)',
                  borderRadius: '12px',
                  textAlign: 'left',
                  color: 'var(--text)',
                  fontFamily: 'var(--f-head)',
                  fontSize: '14px',
                  cursor: showAnswer ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {option}
                {showAnswer && index === question.correct && (
                  <span style={{ position: 'absolute', right: '16px', color: '#22C55E', fontWeight: 700 }}>✓</span>
                )}
                {showAnswer && selected === index && index !== question.correct && (
                  <span style={{ position: 'absolute', right: '16px', color: '#EF4444', fontWeight: 700 }}>✗</span>
                )}
              </button>
            ))}
          </div>

          {!showAnswer && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handleSubmit}
                disabled={selected === null}
                style={{
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  borderRadius: '12px',
                  background: selected !== null ? 'var(--accent)' : 'var(--surface-hover)',
                  color: '#FFF',
                  border: 'none',
                  cursor: selected !== null ? 'pointer' : 'default',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  if (selected !== null) {
                    e.currentTarget.style.background = 'var(--accent-hov)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }
                }}
                onMouseLeave={e => {
                  if (selected !== null) {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                Submit Answer
              </button>
              {currentQuestion < QUESTIONS.length - 1 && (
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontFamily: 'var(--f-head)',
                    borderRadius: '12px',
                    background: 'transparent',
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
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  Skip
                </button>
              )}
            </div>
          )}

          {showAnswer && (
            <div style={{
              marginTop: '16px',
              padding: '14px',
              background: 'var(--bg-2)',
              borderRadius: '12px',
              fontFamily: 'var(--f-head)',
              fontSize: '14px',
              color: 'var(--text)',
            }}>
              {selected === question.correct
                ? 'Correct! Well done.'
                : `Incorrect. The answer is: ${question.options[question.correct]}`
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
}