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
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)', padding: '32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--f-num)', fontSize: '13px', color: 'var(--text-3)', marginBottom: '4px' }}>
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </div>
            <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '20px', fontWeight: 700, color: 'var(--text)' }}>
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
                  width: '100%', padding: '14px 16px',
                  background: selected === index
                    ? (index === question.correct ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)')
                    : (showAnswer && index === question.correct ? 'rgba(34,197,94,0.15)' : 'var(--bg-2)'),
                  border: selected === index
                    ? (index === question.correct ? '2px solid #22C55E' : '2px solid #EF4444')
                    : '1px solid var(--border)',
                  borderRadius: 'var(--r-sm)',
                  textAlign: 'left', color: 'var(--text)',
                  fontFamily: 'var(--f-head)', fontSize: '14px',
                  cursor: showAnswer ? 'default' : 'pointer',
                  transition: 'all 0.15s ease'
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
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              style={{
                padding: '12px 24px', fontSize: '15px', fontWeight: 600,
                fontFamily: 'var(--f-head)', borderRadius: '10px',
                background: selected !== null ? 'var(--accent)' : 'var(--border)',
                color: '#FFF', border: 'none', cursor: selected !== null ? 'pointer' : 'not-allowed',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={e => { if (selected !== null) e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Submit Answer
            </button>
          )}

          {showAnswer && (
            <div style={{ marginTop: '16px', padding: '12px', background: 'var(--bg-2)', borderRadius: 'var(--r-sm)' }}>
              {selected === question.correct
                ? 'Correct! Well done.'
                : `Incorrect. The answer is: ${question.options[question.correct]}`
              }
            </div>
          )}

          {currentQuestion < QUESTIONS.length - 1 && !showAnswer && (
            <button
              onClick={handleSubmit}
              style={{
                marginLeft: '12px', padding: '12px 20px', fontSize: '14px',
                fontFamily: 'var(--f-head)', borderRadius: '10px',
                background: 'transparent', border: '1px solid var(--border)',
                color: 'var(--text)', cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </section>
  );
}