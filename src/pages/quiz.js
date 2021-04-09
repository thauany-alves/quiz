import React, { useEffect, useState } from 'react';
import quiz from '../data.json';
import Result from '../components/Result';
import QuestionBox from '../components/QuestionBox';



export default function Quiz(){ 
  const [showResult, setshowResult] = useState(false);
  const [respUser, setRespUser] = useState([]);
  const [score, setScore] = useState(0);
  const numQuestions = quiz.questions_answers.length;

  useEffect(()=>{
    
  },[respUser, numQuestions])

  const playAgain = () => {
    setRespUser([]);
    setScore(0);
    setshowResult(false);
  };

  const recorAnswer = (answer, key) => {
    let existResp;
    if(respUser.length > 0) {
      existResp = respUser.filter(r => r.q_id !== key);
    }
    const response = {
      answer_id: answer.id,
      answer_is_true: answer.is_true,
      q_id: key,
    }
    if(existResp) {
      setRespUser([...existResp, response]);
    } else {
      setRespUser([...respUser, response]);
    } 
  };
    
  const sendResponses = () => {
    console.log(respUser);
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
      
      {!showResult &&
        <>
          {quiz.questions_answers.map(({text, answers, id}) => 
            <QuestionBox question={text} answers={answers} key={id}
              selected={(answer)  => recorAnswer(answer, id)}
            />
          )}
          <br/>
          <button type='button' onClick={sendResponses}>Submit</button>
        </>
       }
       
      {showResult
        ? (
            <Result 
              numQuestions={numQuestions}
              score={score}
              playAgain={playAgain}
            />
          )
        : null
      }
    </>
  );
}