import React, { useState } from 'react'
// import Contact from '../../components/contact/Contact'
import Home from '../../components/home/Home'
import Menue from '../../components/menue/Menue'
import Navbar from '../../components/NavBar/Navbar'
import Protofolio from '../../components/protofolio/Protofolio'
import Testimonials from '../../components/testimonials/Testimonials'
// import ProjectPage from '../projectPage/ProjectPage'
// import Works from '../../components/works/Works'
import './homePage.scss'

export default function HomePage (props) {
  const { data, setData, openMenue, setOpenMenue, dark, setDark } = props
  return (
    <div
      className='homePage'
      style={{ background: dark && '#222', color: dark && '#fff' }}
    >
      <Navbar dark={dark} openMenue={openMenue} setOpenMenue={setOpenMenue} />
      <Menue
        setDark={setDark}
        dark={dark}
        openMenue={openMenue}
        setOpenMenue={setOpenMenue}
      />
      <div className='sectionsContainer'>
        <Home dark={dark} />
        <Protofolio dark={dark} data={data} setData={setData} />

        {/* <Works /> */}
        <Testimonials dark={dark} />
        {/* <Contact dark={dark} /> */}
      </div>
    </div>
  )
}
