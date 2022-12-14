import React from 'react'
import './personalinformation.css'
import ME from '../../assets/sam-personal.jpg'

const PersonalInformation = () => {
  return (
    <section id='personalinformation'>
      <h5>Introduction and</h5>
      <h2>Personal Information</h2>

      <div className="container information__container">
        <div className="personal__information">
          <div className="personal__information-image">
            <img src={ME} alt="Personal Information Image" />
          </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="personal_content">
          <div className="personal__cards">
            <article className='personal__card'>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInformation