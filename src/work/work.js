import React, { useRef, useEffect } from 'react'
import Template from '../template/template'
import Mywork from './myWork/myWork'
import Styles from './myWork/myWork.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
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
    <div className={Styles['main-div']} id='work' ref={divRef}>
      <Template
        head='My Work'
        text={
          <p>
            I’ve made some projects for portfolio. This is a different <br />
            challanges with different difficulties
          </p>
        }
      />
      <Mywork />
    </div>
  )
}

export default Work
