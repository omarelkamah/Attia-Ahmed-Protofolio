import React, { useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import './contact.scss'

import emailjs from 'emailjs-com'

export default function Contact ({ dark }) {
  const [massage, setMassage] = useState(false)
  const formRef = useRef()

  const handelSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_fhhu12a',
        'template_l30h67z',
        formRef.current,
        'user_XkHowpzeoMvwEDtlXZ6D8'
      )
      .then(
        result => {
          console.log(result.text)
          setMassage(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div
      className='contact'
      id='contact'
      style={{ background: dark && '#222' }}
    >
      <div className='right'>
        <div className='section-title' style={{ color: dark && '#fff' }}>
          <h2>Contact</h2>
        </div>
        <form onSubmit={handelSubmit} ref={formRef}>
          <input
            type='text'
            placeholder='Name / الأسم'
            style={{ background: dark && '#333' }}
            name='user_name'
          />
          <input
            type='text'
            placeholder='Subject / العنوان'
            style={{ background: dark && '#333' }}
            name='user_subject'
          />
          <textarea
            placeholder='Massage / الرسالة'
            style={{ background: dark && '#333' }}
            name='message'
          ></textarea>
          <input
            type='submit'
            value='send'
            style={{ background: dark && '#333' }}
          />
        </form>
        {massage && (
          <span className='massage'>Thanks Alot, I Will Replay ...</span>
        )}
      </div>
    </div>
  )
}
