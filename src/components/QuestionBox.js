import React, { useState } from 'react';

const QuestionBox = ({ question, disabled, selected}) => { 
  const [answerSelected, setAnswerSelected] = useState(disabled);
  const [feedback, setFeedback] = useState(false);

  console.log('answersSelected', answerSelected);
  return (
    <div className="questionBox">
        <div className="question">{question.text}</div>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            disabled={disabled}
            className={answer.id === answerSelected ? 'selectedBtn' :'answerBtn'}
            onClick={()=>{
              setFeedback(answer.is_true);
              setAnswerSelected(answer.id);
              selected(answer)
            }}> 
            {answer.text}
         </button>
        ))}
        { disabled && 
          <div>
            {feedback ? question.feedback_true : question.feedback_false}
          </div> 
        }
    </div>
  )
};


export default QuestionBox;