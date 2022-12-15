import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {GiTriforce} from 'react-icons/gi'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="https://www.youtube.com/watch?v=2x_pqyrf9lA" className='footer-logo' target="_blank"><GiTriforce size='50' /></a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#interestinit">Interest in IT</a></li>
          <li><a href="#idealjob">Ideal Job</a></li>
          <li><a href="#personalprofile">Personal Profile</a></li>
          <li><a href="#projectidea">Project Idea</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com" target="_blank"><AiOutlineFacebook /></a>
          <a href="https://instagram.com" target="_blank"><AiOutlineInstagram /></a>
          <a href="https://twitter.com" target="_blank"><FiTwitter /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; SKDxxB. All Rights Reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer