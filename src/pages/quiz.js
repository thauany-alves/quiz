import React, { useState } from 'react';
import quiz from '../data.json';

export default function Quiz(){ 
  const [score, setScore] = useState(0);
  
  function Answers(props){
    return props.answers.map(answer => {
      return(
        <li>{answer.text}</li>
      )
    });
  }

  return(
    <>
      <header>
        <h1>{quiz.title}</h1>
        <a href={quiz.url} rel="noreferrer" target="_blank">See this video</a>
      </header>
      <main>
        {quiz.questions_answers.map(question => {
          return(
            <>
              <h3>{question.text}</h3>
              <ul>
                <Answers answers={question.answers} />
              </ul>
              <br/>
            </>
          )
        })}
      </main>
    </>
  );
}