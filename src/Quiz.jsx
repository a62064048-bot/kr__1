import { useState } from 'react';

export default function Quiz({ question, answers }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const isCorrect = selectedAnswer !== null && answers[selectedAnswer].correct;

  function handleAnswerClick(index) {
    setSelectedAnswer(index);
  }

  return (
    <section className="quiz-card" aria-labelledby="quiz-question">
      <div className="card-topline">
        <span className="question-tag">ВОПРОС 01</span>
        <span className="time-tag"><span aria-hidden="true">◷</span> 1 мин</span>
      </div>

      <h2 id="quiz-question">{question}</h2>
      <p className="answer-instruction">Выбери один вариант ответа</p>

      <div className="answer-list" role="group" aria-label="Варианты ответа">
        {answers.map((answer, index) => {
          const selected = selectedAnswer === index;
          const answerClass = selected
            ? answer.correct ? 'answer-option is-correct' : 'answer-option is-incorrect'
            : 'answer-option';
          return (
            <button
              className={answerClass}
              type="button"
              key={answer.text}
              onClick={() => handleAnswerClick(index)}
              aria-pressed={selected}
            >
              <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
              <span className="answer-text">{answer.text}</span>
              <span className="answer-indicator" aria-hidden="true">{selected && answer.correct ? '✓' : '↗'}</span>
            </button>
          );
        })}
      </div>

      <div className={`feedback ${selectedAnswer === null ? '' : isCorrect ? 'feedback-success' : 'feedback-error'}`} aria-live="polite">
        {selectedAnswer === null ? (
          <><span className="feedback-star" aria-hidden="true">✳</span><span>Ответ появится здесь</span></>
        ) : isCorrect ? (
          <><span className="feedback-star" aria-hidden="true">✳</span><span>ПРАВИЛЬНО!</span></>
        ) : (
          <><span className="feedback-star" aria-hidden="true">↻</span><span>Попробуй ещё раз</span></>
        )}
      </div>
    </section>
  );
}
