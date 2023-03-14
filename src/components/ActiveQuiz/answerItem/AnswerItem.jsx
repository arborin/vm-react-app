import React from 'react'

export default function AnswerItem(props) {
  return (
    <li onClick={()=>props.onAnswerClick(props.answer.id)}>{props.answer.text} </li>
  )
}
