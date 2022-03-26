import React, { useState } from 'react'
import Contact from '../../components/contact/Contact'
import Home from '../../components/home/Home'
import Menue from '../../components/menue/Menue'
import Navbar from '../../components/NavBar/Navbar'
import Protofolio from '../../components/protofolio/Protofolio'
import Testimonials from '../../components/testimonials/Testimonials'
// import Works from '../../components/works/Works'
import './homePage.scss'

export default function HomePage () {
  const [openMenue, handeleMenue] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <div
      className='homePage'
      style={{ background: dark && '#222', color: dark && '#fff' }}
    >
      <Navbar dark={dark} openMenue={openMenue} handeleMenue={handeleMenue} />
      <Menue
        setDark={setDark}
        dark={dark}
        openMenue={openMenue}
        handeleMenue={handeleMenue}
      />
      <div className='sectionsContainer'>
        <Home dark={dark} />
        <Protofolio dark={dark} />
        {/* <Works /> */}
        <Testimonials dark={dark} />
        {/* <Contact dark={dark} /> */}
      </div>
    </div>
  )
}