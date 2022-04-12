import React, { useRef, useEffect } from 'react'
import Styles from './hero.module.css'
import { gsap } from 'gsap'

const Hero = () => {
  const h2Ref = useRef()
  const pRef = useRef()
  const btnRef1 = useRef()
  const btnRef2 = useRef()
  const btnRef3 = useRef()
  const btnRef4 = useRef()
  const btnRef5 = useRef()

  useEffect(() => {
    gsap.to(h2Ref.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(pRef.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 1.7,
    })
    gsap.to(btnRef1.current, {
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
    gsap.to(btnRef2.current, {
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
    gsap.to(btnRef3.current, {
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
    gsap.to(btnRef4.current, {
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
    gsap.to(btnRef5.current, {
      'clip-path': 'circle(50% at 50% 50%)',
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
  })

  return (
    <div className={Styles['main-div']}>
      <div className={Styles['button-div']}>
        <HeroItems
          class={`${Styles.active} ${Styles.button}`}
          btnRef={btnRef1}
        />
        <a href='#work'>
          <HeroItems
            class={`${Styles.passive} ${Styles.button}`}
            btnRef={btnRef2}
          />
        </a>
        <a href='#skills'>
          <HeroItems
            class={`${Styles.passive} ${Styles.button}`}
            btnRef={btnRef3}
          />
        </a>
        <a href='#about'>
          <HeroItems
            class={`${Styles.passive} ${Styles.button}`}
            btnRef={btnRef4}
          />
        </a>

        <a href='#contact'>
          {' '}
          <HeroItems
            class={`${Styles.passive} ${Styles.button}`}
            btnRef={btnRef5}
          />
        </a>
      </div>
      <div className={Styles['hero-div']}>
        <h2 className={Styles.h2} ref={h2Ref}>
          Time equals quality
        </h2>
        <p className={Styles.p} ref={pRef}>
          Every failure is a step to success - Wiliam Whewell
        </p>
      </div>
    </div>
  )
}

const HeroItems = (props) => {
  return <button className={props.class} ref={props.btnRef}></button>
}

export default Hero
