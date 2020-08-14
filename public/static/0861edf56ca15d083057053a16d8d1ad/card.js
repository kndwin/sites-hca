import React from 'react'

export default function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.date}</h3>
      <img src={props.image} alt={props.alt} />
    </div>
  )
}
