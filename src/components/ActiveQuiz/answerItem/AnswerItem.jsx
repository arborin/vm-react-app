import React from 'react'

export default function AnswerItem(props) {
  
  let color = 'black';
  if(props.answerState === 'success'){
    color = 'green'
  }
  
  if(props.answerState === 'error'){
    color = 'red'
  }
  
  
  return (
    <li style={{color: color}}onClick={()=>props.onAnswerClick(props.answer.id)}>{props.answer.text} </li>
  )
}
