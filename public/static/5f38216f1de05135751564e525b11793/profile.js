import React from 'react'

export default function Profile(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.alt} />
      <p>{props.description}</p>
      <button>{props.button}</button>
    </div>
  )
}
