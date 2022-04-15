import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar ({ dark, openMenue, setOpenMenue }) {
  return (
    <div
      className={'navbar ' + (openMenue && 'active')}
      style={{ background: dark && '#333' }}
    >
      <div className='container'>
        <div className='left'>
          <Link to='/' className='logo'>
            <img src='/assets/main-logo.png' alt='Logo' />
          </Link>
          <div className='navbar-contact' style={{ color: dark && '#fff' }}>
            <i className='far fa-envelope-open'></i>
            <a href='mailto:aelkammah05@gmail.com'>aelkammah05@gmail.com</a>
          </div>
          <div className='navbar-contact' style={{ color: dark && '#fff' }}>
            <i className='far fa-phone'></i>
            <span>01006129547</span>
          </div>
        </div>
        <div className='right' onClick={() => setOpenMenue(!openMenue)}>
          <span className='one' style={{ background: dark && '#fff' }}></span>
          <span className='two' style={{ background: dark && '#fff' }}></span>
          <span className='three' style={{ background: dark && '#fff' }}></span>
        </div>
      </div>
    </div>
  )
}
