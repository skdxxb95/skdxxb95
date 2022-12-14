import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaCogs} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {BiBriefcase} from 'react-icons/bi'
import {MdOutlinePsychology} from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#personalinformation" onClick={() => setActiveNav('#personalinformation')} className={activeNav === '#personalinformation' ? 'active' : ''}><BsPersonCircle/></a>
      <a href="#interestinit" onClick={() => setActiveNav('#interestinit')} className={activeNav === '#interestinit' ? 'active' : ''}><FaCogs/></a>
      <a href="#idealjob" onClick={() => setActiveNav('#idealjob')} className={activeNav === '#idealjob' ? 'active' : ''}><BiBriefcase/></a>
      <a href="#personalprofile" onClick={() => setActiveNav('#personalprofile')} className={activeNav === '#personalprofile' ? 'active' : ''}><MdOutlinePsychology/></a>
      <a href="#projectidea" onClick={() => setActiveNav('#projectidea')} className={activeNav === '#projectidea' ? 'active' : ''}><HiOutlineLightBulb/></a>
    </nav>
  )
}

export default Nav