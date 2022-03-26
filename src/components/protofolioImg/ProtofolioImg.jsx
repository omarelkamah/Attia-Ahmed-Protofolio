import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import './protofolioImg.scss'

export default function ProtofolioSlider ({ src, secondImgs }) {
  const [select, setSelect] = useState(src)
  const [active, setActive] = useState('secondImgContainer')

  return (
    <div className='protofolioImgContainer'>
      <div className='mainImg'>
        <Fade top>
          <img src={select} alt='' />
        </Fade>
      </div>
      <div className='second'>
        {secondImgs.map(img => (
          <div
            className={active}
            key={Math.random()}
            onClick={() => {
              setSelect(img.secondImg)
            }}
          >
            <Fade bottom>
              <img src={img.secondImg} alt='' />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}
