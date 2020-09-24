import React from 'react'
import styles from './profile.module.scss'

export default function Profile(props) {
  return (
    <div className={styles.layout}>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.alt} />
      <p>{props.description}</p>
      <button>{props.button}</button>
    </div>
  )
}
