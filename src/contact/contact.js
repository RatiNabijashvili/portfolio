import React, { useState, useRef, useEffect } from 'react'
import Styles from './contact.module.css'
import Template from '../template/template'
import Image from './img/andras-vas-Bd7gNnWJBkU-unsplash.webp'
import emailjs from 'emailjs-com'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const divRef = useRef(null)
  const form = useRef()

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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let emailValidation =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!name) {
      setError(true)
      document.getElementById('name-alert').innerHTML = 'Name is empty'
      document.getElementById('nameInput').style.border = 'solid 1px #b7287b'
    } else {
      document.getElementById('name-alert').innerHTML = ''
      document.getElementById('nameInput').style.border = 'solid 1px #cccccc'
    }

    if (!email) {
      setError(true)
      document.getElementById('email-alert').innerHTML = 'Email is empty'
      document.getElementById('emailInput').style.border = 'solid 1px #b7287b'
    } else if (!emailValidation.test(email)) {
      document.getElementById('email-alert').innerHTML =
        'Email is not formated well'
    } else {
      document.getElementById('email-alert').innerHTML = ''
      document.getElementById('emailInput').style.border = 'solid 1px #cccccc'
    }

    if (!message) {
      setError(true)
      document.getElementById('message-alert').innerHTML = 'Message is empty'
      document.getElementById('messageInput').style.border = 'solid 1px #b7287b'
    } else {
      document.getElementById('message-alert').innerHTML = ''
      document.getElementById('messageInput').style.border = 'solid 1px #cccccc'
    }

    if (name && emailValidation.test(email) && message) {
      const person = { name, email, message }
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
      setMessage('')
      setError(false)
      emailjs
        .sendForm(
          'service_iya1ar4',
          'portfolio',
          form.current,
          'tY_BFhbqAT7AKRwys'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <div className={Styles['main-div']} id='contact' ref={divRef}>
      <div>
        <Template head='Contact' text='Fill a contact form and hire me' />
        <form ref={form}>
          <div className={Styles['name-form']}>
            <label className={Styles.label}>Name</label>
            <input
              type='text'
              className={Styles['default-input']}
              id='nameInput'
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='name'
            ></input>
            <p
              className={Styles['alert-p']}
              id='name-alert'
              value={error}
              onChange={setError}
            ></p>
          </div>
          <div className={Styles['email-form']}>
            <label className={Styles.label}>Email</label>
            <input
              type='email'
              className={Styles['default-input']}
              id='emailInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            ></input>
            <p
              className={Styles['alert-p']}
              id='email-alert'
              value={error}
              onChange={setError}
            ></p>
          </div>
          <div className={Styles['message-form']}>
            <label className={Styles.label}>Message</label>
            <textarea
              type='text'
              className={Styles['message-input']}
              id='messageInput'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
            ></textarea>
            <p
              className={Styles['alert-p']}
              id='message-alert'
              value={error}
              onChange={setError}
            ></p>
          </div>
        </form>
        <button
          className={Styles['send-button']}
          id='button'
          onClick={handleSubmit}
        >
          Send it
        </button>
        <div className={Styles['comp-div']}>
          <Component head='Number' body='+955-568-55-05-58' />
          <Component head='Email' body='r.nabijashvili@gmail.com' />
        </div>
      </div>
      <div className={Styles['img-div']}>
        <img src={Image} className={Styles.img} />
      </div>
    </div>
  )
}

const Component = (props) => {
  return (
    <div className={Styles['component-div']}>
      <h2 className={Styles['component-head']}>{props.head}</h2>
      <h2 className={Styles['component-body']}>{props.body}</h2>
    </div>
  )
}

export default Contact
