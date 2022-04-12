import React from 'react'
import Styles from './template.module.css'

const Template = (props) => {
  return (
    <div className={Styles['main-div']}>
      <div className={Styles.div} />
      <h2 className={Styles.h2}>{props.head}</h2>
      <div className={Styles.p}>{props.text}</div>
    </div>
  )
}

export default Template
