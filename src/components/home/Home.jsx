import React, { useEffect, useRef } from 'react'

import { init } from 'ityped'

import './home.scss'
import { Fade } from 'react-reveal'

export default function Home ({ dark }) {
  const typeText = useRef()

  useEffect(() => {
    console.log(typeText)

    init(typeText.current, {
      showCursor: true,
      backDelay: 500,
      strings: [
        'Graphic Designer',
        'Social Media Designer',
        'Logo Designer',
        'Brand Indentity Designer'
      ]
    })
  }, [])

  return (
    <div className='home' id='home'>
      <div className='left'>
        <Fade left>
          <div className='img-container'>
            <img src='assets/personal-picture.png' alt='img' />
          </div>
        </Fade>
      </div>
      <div className='right'>
        <Fade right>
          <p className='hello'>Hi There I'm..</p>
          <div className='logo-container'>
            <img src='assets/main-logo.png' alt='Name' className='img-logo' />
          </div>
          <p className='job-title' style={{ color: dark && '#fff' }}>
            <span ref={typeText}></span>
          </p>
        </Fade>
      </div>
      <a href='#protofolio' className='icon' style={{ color: dark && '#fff' }}>
        <i className='fas fa-chevron-down'></i>
      </a>
    </div>
  )
}
