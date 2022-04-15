import React from 'react'
import { Link } from 'react-router-dom'
import Togler from '../togler/Togler'

import './menue.scss'

export default function Menue (props) {
  const { openMenue, setOpenMenue, dark, setDark } = props
  return (
    <div className={'menue ' + (openMenue && 'active')}>
      <ul className='list'>
        <li onClick={() => setOpenMenue(!openMenue)}>
          <a href='#home'>Home</a>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <a href='#protofolio'>Protofolio</a>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <a href='#testimoials'>Testimonials</a>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <Link to='/categories/logo'>Logos</Link>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <Link to='/categories/social'>Social Media</Link>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <Link to='/categories/labels'>Labels</Link>
        </li>
        <li onClick={() => setOpenMenue(false)}>
          <Link to='/categories/videos'>Videos</Link>
        </li>
        <li>
          <Togler dark={dark} setDark={setDark} />
        </li>
      </ul>
    </div>
  )
}
