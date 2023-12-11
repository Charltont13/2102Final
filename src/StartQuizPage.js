// StartQuizPage.js
import React from 'react';
import './StartQuizPage.css'; // Import the CSS file

function StartQuizPage({ onStartQuiz }) {
  //const funnyGifLink = '\quiz_app\src\image1_0.jpg';

  return (
    <div className="start-quiz-page"> 
      <h1>Welcome to the Quiz!</h1>
      <p>Get ready to test your knowledge.</p>
      <img src="/image1_0.jpg" alt="Funny Gif" width="150" height="150" />
      <div className="colored-rectangle red"></div>
      <div className="colored-rectangle blue"></div>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartQuizPage;
