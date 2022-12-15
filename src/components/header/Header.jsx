import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sam.PNG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Sam</h1>
        <h5 className="text-light">Welcome to my Assignment 1</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#projectidea' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

/* Need to add location for a href for scroll__down */