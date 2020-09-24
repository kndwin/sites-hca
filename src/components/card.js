import React from 'react'
import styles from './card.module.scss'

export default function Card(props) {
  return (
    <div className={styles.layout}>
      <h3>{props.title}</h3>
      <h3>{props.date}</h3>
      <img src={props.image} alt={props.alt} />
    </div>
  )
}
