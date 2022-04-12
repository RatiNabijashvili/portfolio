import React, { useRef, useEffect } from 'react'
import Template from '../template/template'
import Styles from './skills.module.css'
import Image from './img/bestami-sarikaya-kdXzw0fd0TU-unsplash.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
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
    <div className={Styles['main-div']} id='skills' ref={divRef}>
      <div>
        <Template
          head='My skills'
          text='This is my skills, which i develop after 2021 summer'
        />
        <div className={Styles['front-skills']}>
          <h2 className={Styles.h2} id='test'>
            Front-End skills:
          </h2>
          <div className={Styles['component-div']}>
            <Component skillName='Html' />
            <Component skillName='Css' />
            <Component skillName='JavaScript' />
            <Component skillName='React' />
          </div>
        </div>
        <div className={Styles['back-skills']}>
          <h2 className={Styles.h2}>Back-End skills:</h2>
          <div className={Styles['component-div']}>
            <Component skillName='Working' />
          </div>
        </div>
        <div className={Styles['design-skills']}>
          <h2 className={Styles.h2}>Design:</h2>
          <div className={Styles['component-div']}>
            <Component skillName='Figma' />
            <Component skillName='Adobe PS' />
            <Component skillName='Adobe XD' />
          </div>
        </div>
      </div>
      <div className={Styles['test-div']}>
        <img src={Image} className={Styles.img} alt='skillPage-img' />
      </div>
    </div>
  )
}

const Component = (props) => {
  return <h2 className={Styles['component-h2']}>{props.skillName}</h2>
}

export default Skills
