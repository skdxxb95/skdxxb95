import React from 'react'
import './personalprofile.css'
import {RiPsychotherapyLine} from 'react-icons/ri'
import {GiOpenBook} from 'react-icons/gi'
import {GiPsychicWaves} from 'react-icons/gi'
import MBTI from '../../assets/mbti.png'
import LEARN1 from '../../assets/learningtest1.png'
import LEARN2 from '../../assets/learningtest2.png'
import FIVE from '../../assets/big5test.png'

const PersonalProfile = () => {
  return (
    <section id='personalprofile'>
      <h5>These are the results and my interpretation of three different..</h5>
      <h2>Personality Tests</h2>

      <div className="container personalprofile__container">
        <div className="personalprofile__mbti">
          <article className="personalprofile__mbti-test">
            <RiPsychotherapyLine />
            <h4>Myers-Briggs Test</h4>
            <small>Click here to open</small>
          </article>
        </div>
        <div className="personalprofile__learning">
          <article className="personalprofile__learning-test">
            <GiOpenBook />
            <h4>Learning Styles Test</h4>
            <small>Click here to open</small>
          </article>
        </div>
        <div className="personalprofile__bigfive">
          <article className="personalprofile__bigfive-test">
            <GiPsychicWaves />
            <h4>Big Five Test</h4>
            <small>Click here to open</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PersonalProfile