import React, { useRef, useEffect } from 'react'
import Template from '../template/template'
import Image from './img/mohammad-rahmani-8OnkIkFBBtM-unsplash.webp'
import Styles from './about.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const divRef = useRef(null)

  useEffect(() => {
    const el = divRef.current
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <div className={Styles['main-div']} id='about' ref={divRef}>
      <div>
        <Template head='About' />
        <div className={Styles['img-div']}>
          <img src={Image} className={Styles.img} alt='about-img' />
        </div>
      </div>
      <div className={Styles['text-div']}>
        <div className={Styles['h2-div']}>
          <h2 className={Styles.h2}>My name is</h2>
          <h2 className={Styles.name}>Rati Nabijashvili</h2>
        </div>
        <p className={Styles.p}>
          I’m a junior front-end web developer, self-taught <br /> programmer,
          who want’s to became full-stack <br />
          web developer. I have done some work for my <br /> own development,
          also I have done Harvard’s <br />
          cs50 and I have official degree. I’am student and <br />
          studying in TSU computer science.
        </p>
        <div className={Styles['components-div']}>
          <div className={Styles['first-column']}>
            <Components head='Country' subline='Georgia' />
            <Components head='Education' subline='Studying' />
            <Components head='Instagram' subline='rati_nabijashvili' />
          </div>
          <div className={Styles['second-column']}>
            <Components head='Age' subline='18' />
            <Components head='FaceBook' subline='Rati Nabijashvili' />
            <Components head='Github' subline='RatiNabijashvili' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Components = (props) => {
  return (
    <div>
      <h2 className={Styles.head}>{props.head}</h2>
      <h2 className={Styles.subline}>{props.subline}</h2>
    </div>
  )
}
export default About
