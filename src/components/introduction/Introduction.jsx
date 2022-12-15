import React from 'react'
import './introduction.css'
import ME from '../../assets/sam-personal.jpg'
import {TbReplace} from 'react-icons/tb'

const Introduction = () => {
  return (
    <section id='introduction'>
        <h5>A little bit..</h5>
        <h2>About Me</h2>

        <div className="container introduction__container">
            <div className="introduction__me">
                <div className="introduction__me-image">
                    <img src={ME} alt="Personal Information Image" />
                </div>
            </div>

            <div className="introduction__content">
                <div className="introduction__cards">
                    <article className="introduction__card">
                        <TbReplace className='introduction__icon'/>
                        <h5>Samuel Konon Dundas Bruce</h5>
                        <small>Full Name</small>
                    </article>

                    <article className="introduction__card">
                        <TbReplace className='introduction__icon'/>
                        <h5>S3992963</h5>
                        <small>Student ID</small>
                    </article>

                    <article className="introduction__card">
                        <TbReplace className='introduction__icon'/>
                        <h5>S3992963@student.rmit.edu.au</h5>
                        <small>Student Email Address</small>
                    </article>
                </div>
                <p>
                Hello, my name is Sam, and I am originally from Bristol, England. I moved to Australia when I was 6 years old and have spent most of my life in Brisbane. Before receiving my Certificate IV in Cyber Security, I worked in the hospitality industry. However, I recently decided to make a change and started a job in Information Technology, as a tech support officer. I am passionate about software development and have decided to pursue it as a profession. I have always been interested in technology and have grown to love the endless opportunities and enjoyment that it offers. As a fun fact, I am related to Robert the Bruce, the former king of the Scots, who was famously depicted in the movie Braveheart. But don't worry, I don't have any plans to betray anyone or take their land or freedom!
                </p>
            </div>
        </div>
    </section>
  )
}

export default Introduction