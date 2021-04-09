import React, { useEffect, useState } from 'react';
import quiz from '../data.json';
import QuestionBox from '../components/QuestionBox';

export default function Quiz(){ 
  const [showResult, setshowResult] = useState(false);
  const [respUser, setRespUser] = useState([]);
  const [score, setScore] = useState(0);
  const numQuestions = quiz.questions_answers.length;

  const recorAnswer = (answer, question_id) => {
    let existResp;
    if(respUser.length > 0) {
      existResp = respUser.filter(r => r.q_id !== question_id);
    }
    const response = {
      answer_id: answer.id,
      answer_is_true: answer.is_true,
      q_id: question_id,
    }
    if(existResp) {
      setRespUser([...existResp, response]);
    } else {
      setRespUser([...respUser, response]);
    }
  };

  
    
  const sendResponses = () => {
    console.log('Resps: ', respUser);
    if(respUser.length === numQuestions){
      const answers_corrects = respUser.filter(r => r.answer_is_true);
      setScore(answers_corrects.length);
      setshowResult(true);
    }else{
      alert('Fill all questions!');
    }
  }

  return(
    <>
      <header>
        <h1>{quiz.title}</h1>
        <a href={quiz.url} rel="noreferrer" target="_blank">See this video</a>
      </header>
      
      <main>
        {quiz.questions_answers.map((question) => 
          <QuestionBox question={question} key={question.id} disabled={showResult}
            selected={(answer)  => {
              recorAnswer(answer, question.id)
            }}
          />
        )}
        <br/>
        <button type='submit' onClick={sendResponses} disabled={showResult}> Submit</button>
      </main>
       
      {showResult &&
        <div className="score-board">
          <div className="score"> Your score is {score} / {numQuestions} correct answer ! ! ! </div>
        </div>
      }
    </>
  );
}