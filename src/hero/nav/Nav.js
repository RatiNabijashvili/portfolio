import React, { useRef, useEffect } from 'react'
import Styles from './nav.module.css'
import { gsap } from 'gsap'

const Nav = () => {
  const logoRef = useRef()
  const navRef1 = useRef()
  const navRef2 = useRef()
  const navRef3 = useRef()
  const navRef4 = useRef()
  const navRef5 = useRef()

  useEffect(() => {
    gsap.to(logoRef.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(navRef1.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(navRef2.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(navRef3.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(navRef4.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
    gsap.to(navRef5.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2,
    })
  })

  return (
    <div className={Styles['main-div']}>
      <div className={Styles['logo-div']}>
        <h2 className={Styles.logo} ref={logoRef}>
          Nabija
        </h2>
      </div>
      <div className={Styles['nav-bar']}>
        <ul className={Styles.ul}>
          <NavItems name='Home' class={Styles.active} navRef={navRef1} />
          <a href='#work'>
            <NavItems name='Work' class={Styles.passive} navRef={navRef2} />
          </a>
          <a href='#skills'>
            <NavItems name='Skills' class={Styles.passive} navRef={navRef3} />
          </a>
          <a href='#about'>
            <NavItems name='About' class={Styles.passive} navRef={navRef4} />
          </a>
          <a href='#contact'>
            {' '}
            <NavItems name='Contact' class={Styles.passive} navRef={navRef5} />
          </a>
        </ul>
      </div>
    </div>
  )
}

const NavItems = (props) => {
  return (
    <li className={props.class} ref={props.navRef}>
      {props.name}
    </li>
  )
}

export default Nav
