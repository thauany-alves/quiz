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
          <div className={feedback ? 'feedback_true' : 'feedback_false'}>
            {feedback ? 
              <>
                <span class="material-icons">check_circle</span>
                &nbsp;
                {question.feedback_true} 
              </>
              : 
              <>
                <span class="material-icons">cancel</span>
                &nbsp;
                {question.feedback_false}
              </>
            }
          </div> 
        }
    </div>
  )
};


export default QuestionBox;