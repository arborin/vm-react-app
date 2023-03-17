import React from 'react'
import AnswersList from './activeList.jsx/AnswersList'

export default function ActiveQuiz(props) {
  
  console.log(props)
  
  
  return (
    <div>
        
        <p>
            <span><strong>{props.answerNumber}. </strong>{props.question}</span>
        </p>
        <p>{props.answerNumber} from {props.quizLength}</p>
        
        <AnswersList
          answers={props.answers}
          onAnswerClick={props.onAnswerClick} 
          answerState={props.answerState}
        />
    </div>
  )
}
