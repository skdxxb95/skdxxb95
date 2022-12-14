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