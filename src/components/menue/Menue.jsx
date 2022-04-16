import React from 'react'
import { Link } from 'react-router-dom'
import Togler from '../togler/Togler'

import './menue.scss'

export default function Menue (props) {
  const { openMenue, setOpenMenue, dark, setDark } = props
  const linksList = [
    { id: 1, link: '/', title: 'Home' },
    // { id: 2, link: '/testimoials', title: 'Testimoinals' },
    { id: 3, link: '/categories/logo', title: 'Logos' },
    { id: 4, link: '/categories/social', title: 'Social Media' },
    { id: 5, link: '/categories/labels', title: 'Labels' },
    { id: 6, link: '/categories/videos', title: 'Videos' }
  ]
  return (
    <div className={'menue ' + (openMenue && 'active')}>
      <ul className='list'>
        {linksList.map(link => (
          <li key={link.id} onClick={() => setOpenMenue(false)}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
        <li onClick={() => setOpenMenue(false)}>
          <Togler dark={dark} setDark={setDark} />
        </li>
      </ul>
    </div>
  )
}
