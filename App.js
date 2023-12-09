import React, { useState } from "react";
import "./App.css";
import StartQuizPage from './StartQuizPage.js';

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);


  const questions = [
    {
      text: "Which is the largest rodent in the world?",
      options: [
        { id: 0, text: "beaver", isCorrect: false },
        { id: 1, text: "groundhog", isCorrect: false },
        { id: 2, text: "rat", isCorrect: false },
        { id: 3, text: "capybara", isCorrect: true },
      ],
    },
    {
      text: "What is the powerhouse of the cell?",
      options: [
        { id: 0, text: "mitochondia", isCorrect: true },
        { id: 1, text: "nucleus", isCorrect: false },
        { id: 2, text: "ribosomes", isCorrect: false },
        { id: 3, text: "endoplasmic reticulum", isCorrect: false },
      ],
    },
    {
      text: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
      options: [
        { id: 0, text: "6th", isCorrect: false },
        { id: 1, text: "none of the above", isCorrect: true },
        { id: 2, text: "1st", isCorrect: false },
        { id: 3, text: "2nd", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "How many months have 28 days",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "1", isCorrect: true },
        { id: 2, text: "All of them", isCorrect: true },
        { id: 3, text: "0", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of France?",
      options: [
        { id: 0, text: "Berlin", isCorrect: false },
        { id: 1, text: "Madrid", isCorrect: false },
        { id: 2, text: "Rome", isCorrect: false },
        { id: 3, text: "Paris", isCorrect: true },
      ],
    },
    {
      text: "In what year did World War II end?",
      options: [
        { id: 0, text: "1945", isCorrect: true },
        { id: 1, text: "1939", isCorrect: false },
        { id: 2, text: "1941", isCorrect: false },
        { id: 3, text: "1955", isCorrect: false },
      ],
    },
    {
      text: "Who wrote 'Romeo and Juliet'?",
      options: [
        { id: 0, text: "Charles Dickens", isCorrect: false },
        { id: 1, text: "William Shakespeare", isCorrect: true },
        { id: 2, text: "Jane Austen", isCorrect: false },
        { id: 3, text: "Mark Twain", isCorrect: false },
      ],
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: "Earth", isCorrect: false },
        { id: 1, text: "Mars", isCorrect: true },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Venus", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of Japan?",
      options: [
        { id: 0, text: "Seoul", isCorrect: false },
        { id: 1, text: "Beijing", isCorrect: false },
        { id: 2, text: "Tokyo", isCorrect: true },
        { id: 3, text: "Bangkok", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      <h1> Geeky Quiz 🤓</h1>
      <h2>Score: {score}</h2>

      {quizStarted ? (
        /* Quiz in progress */
        showResults ? (
          /*Results */
          <div className="final-results">
            <h1>Final Score</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Retry</button>
          </div>
        ) : (
          /* Question Card */
          <div className="question-card">
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )
      ) : (
        /* Start Quiz Page */
        <StartQuizPage onStartQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;