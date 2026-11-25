import React from 'react';
import { createRoot } from 'react-dom/client';
import Quiz from './Quiz.jsx';
import './styles.css';

const quizQuestion = {
  question: 'Какой метод массива создаёт новый массив из элементов, прошедших проверку?',
  answers: [
    { text: 'forEach()', correct: false },
    { text: 'filter()', correct: true },
    { text: 'findIndex()', correct: false },
    { text: 'reduce()', correct: false },
  ],
};

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="На главную">
          <span className="brand-mark" aria-hidden="true">Q</span>
          <span>Короткий курс</span>
        </a>
        <span className="course-label">FRONTEND · МОДУЛЬ 05</span>
      </header>

      <section className="quiz-layout" id="top">
        <div className="intro">
          <p className="eyebrow"><span className="eyebrow-dot" />ПРОВЕРЬ СЕБЯ</p>
          <h1>Знания<br />в действии<span className="title-period">.</span></h1>
          <p className="intro-copy">Небольшая пауза в учёбе — самое время закрепить то, что уже знаешь.</p>
          <div className="progress-note">
            <span className="progress-number">01</span>
            <span className="progress-line" />
            <span className="progress-total">01 вопрос</span>
          </div>
        </div>

        <Quiz question={quizQuestion.question} answers={quizQuestion.answers} />
      </section>

      <footer className="footer"><span>Учись в своём ритме</span><span>REACT · 2025</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
