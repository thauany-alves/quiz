import React from 'react';

const Result = ({score, numQuestions, playAgain}) => (
  <div className="score-board">
    <div className="score"> Your score is {score} / {numQuestions} correct answer ! ! ! </div>
    <button className="playBtn" onClick={playAgain}>Play Again</button>
  </div>
)
export default Result;