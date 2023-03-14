import React from 'react'
import AnswerItem from '../answerItem/AnswerItem'

export default function AnswersList(props) {
  console.log("ONLY ANSOWRS");
  console.log(props)
  return (
    <ul>
        {
          props.answers.map((answer, index) => {
              return (
                <AnswerItem 
                  key={index} 
                  answer={answer}
                  onAnswerClick={props.onAnswerClick}
                  />
              )
          })
        }
    </ul>
  )
}
