import React, { useState } from 'react';

const QuestionBox = ({ question, answers, selected}) => {
  return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answers.map((answer, index) => (
          <button
            key={index}
            className="answerBtn"
            onClick={()=>{
              selected(answer);
            }}> 
            {answer.text}
         </button>
        ))}
    </div>
  )
};
export default QuestionBox;