import React, { useRef } from 'react'
import { Fade } from 'react-reveal'

import './testimonials.scss'

export default function Testimonials ({ dark }) {
  const itemsRef = useRef()

  const data = [
    {
      id: 1,
      img: 'assets/testiImg/1.png'
    },
    {
      id: 2,
      img: 'assets/testiImg/2.png'
    },
    {
      id: 3,
      img: 'assets/testiImg/3.png'
    },
    {
      id: 4,
      img: 'assets/testiImg/4.png'
    },
    {
      id: 5,
      img: 'assets/testiImg/5.png'
    },
    {
      id: 6,
      img: 'assets/testiImg/6.png'
    },
    {
      id: 7,
      img: 'assets/testiImg/7.png'
    },
    {
      id: 8,
      img: 'assets/testiImg/8.png'
    },
    {
      id: 9,
      img: 'assets/testiImg/9.png'
    },
    {
      id: 10,
      img: 'assets/testiImg/10.png'
    },
    {
      id: 11,
      img: 'assets/testiImg/11.png'
    },
    {
      id: 12,
      img: 'assets/testiImg/12.png'
    },
    {
      id: 13,
      img: 'assets/testiImg/13.png'
    },
    {
      id: 14,
      img: 'assets/testiImg/14.png'
    },
    {
      id: 15,
      img: 'assets/testiImg/15.png'
    },
    {
      id: 16,
      img: 'assets/testiImg/16.png'
    }
  ]

  const scroll = direction => {
    if (direction === 'left') {
      itemsRef.current.scrollLeft -= 300
    }
    if (direction === 'right') {
      itemsRef.current.scrollLeft += 300
    }
  }

  return (
    <div className='testimoials' id='testimoials'>
      <Fade top>
        <div className='section-title' style={{ color: dark && '#fff' }}>
          <h2>Testimonials</h2>
        </div>
      </Fade>
      <div className='container'>
        <div className='itemContainer' ref={itemsRef}>
          {data.map(item => (
            <div
              className='card'
              style={{ background: dark && '#fff' }}
              key={item.id}
            >
              <div className='imgContainer'>
                <img src={item.img} alt='user' />
              </div>
            </div>
          ))}
        </div>

        <div className='arrows'>
          <Fade left>
            <i className='fas fa-arrow-left' onClick={() => scroll('left')}></i>
          </Fade>
          <Fade right>
            <i
              className='fas fa-arrow-right'
              onClick={() => scroll('right')}
            ></i>
          </Fade>
        </div>
      </div>
    </div>
  )
}
