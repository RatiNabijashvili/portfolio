import React from 'react'
import Styles from './main.module.css'
import Nav from '../nav/Nav'
import Hero from '../heroSection/Hero'

const hero = () => {
  return (
    <div className={Styles['background-image']}>
      <Nav />
      <Hero />
    </div>
  )
}

export default hero
