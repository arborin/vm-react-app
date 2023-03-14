import React from 'react'
import AnswersList from './activeList.jsx/AnswersList'

export default function ActiveQuiz(props) {
  
  console.log(props)
  
  
  return (
    <div>
        
        <p>
            <span><strong>2. </strong>{props.question}</span>
        </p>
        <p>4 from 5</p>
        
        <AnswersList
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
    </div>
  )
}
