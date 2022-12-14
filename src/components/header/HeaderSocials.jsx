import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FiGithub/></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials