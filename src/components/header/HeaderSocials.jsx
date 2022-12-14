import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://youtube.com" target="_blank"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials