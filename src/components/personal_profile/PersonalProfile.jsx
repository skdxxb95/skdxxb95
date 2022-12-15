import React from 'react'
import './personalprofile.css'
import {RiPsychotherapyLine} from 'react-icons/ri'
import {GiOpenBook} from 'react-icons/gi'
import {GiPsychicWaves} from 'react-icons/gi'

const PersonalProfile = () => {
  return (
    <section id='personalprofile'>
      <h5>These are the results and my interpretation of three different..</h5>
      <h2>Personality Tests</h2>

      <div className="container personalprofile__container">
        <div className="personalprofile__mbti">
          <a href="https://www.16personalities.com/profiles/8981a4e8732e7" target="_blank">
          <article className="personalprofile__mbti-test">
            <RiPsychotherapyLine size='50' className='personalprofile__details-icon' />
            <h3>Myers-Briggs Test</h3>
            <small>Click here to open</small>
          </article>
          </a>
        </div>
        <div className="personalprofile__learning">
          <a href='https://i.postimg.cc/NGpw3KqC/learningtest1.png' download target="_blank">
          <article className="personalprofile__learning-test">
            <GiOpenBook size='50' className='personalprofile__details-icon' />
            <h3>Learning Styles Test</h3>
            <small>Click here to open</small>
          </article>
          </a>
        </div>
        <div className="personalprofile__bigfive">
          <a href="https://bigfive-test.com/result/6386d9f71691880008b34efa" target="_blank">
          <article className="personalprofile__bigfive-test">
            <GiPsychicWaves size='50' className='personalprofile__details-icon' />
            <h3>Big Five Test</h3>
            <small>Click here to open</small>
          </article>
          </a>
        </div>
      </div>
      <div className="container personalprofile__text ">
        <div className="personalprofile__content">
          <article className='personalprofile__details'>
            <p>
            Based on the results of three personality tests, I am an INTP-T with a kinaesthetic learning style and high scores in Neuroticism, Openness to Experience, Agreeableness, and Conscientiousness, but a low score in Extraversion. This means that I am introverted, intuitive, thinking, prospecting, and turbulent, with a preference for learning through physical activity. I am also imaginative, open-minded, and flexible with improvising and adapting, and I focus on effectiveness in my thinking. However, I am also self-conscious and anxious, and I am more comfortable around people I trust. The results also suggest that I am cautious, but also driven and eager to improve. I have a strong interest in art and intellectual pursuits, and I am modest and conscientious. My highest scores are in achievement-striving, orderliness, and cooperation. Overall, the results of these tests provide a comprehensive and accurate description of my personality, learning style, and strengths and weaknesses. They indicate that I am introverted, creative, and analytical, I prefer to learn through hands-on experience and am skilled in organization and collaboration. However, I may struggle with social situations and may benefit from working on my trust and Extraversion. These insights can help me to better understand myself and to develop strategies for personal growth and professional success.
            <br></br><br></br>
            My behaviour on a team may be influenced by my introverted, intuitive, and thinking traits. As an introvert, I may prefer to work independently or in small groups, and I may need time to process information and ideas before contributing to group discussions. My intuitive and thinking traits may make me a creative and analytical thinker, but I may struggle with social situations and may benefit from working on my trust and Extraversion. Additionally, my high score in Neuroticism may make me anxious and self-conscious, which could affect my behaviour on a team. I may need to work on managing my anxiety and self-doubt to be a more confident and effective team member. However, my high scores in Openness to Experience, Agreeableness, and Conscientiousness may also influence my behaviour in a positive way. I may be open to new ideas and perspectives, and I may be cooperative and organized in my approach to teamwork. Overall, my behaviour on a team may be influenced by a combination of my introverted, intuitive, and thinking traits, as well as my high scores in Neuroticism, Openness to Experience, Agreeableness, and Conscientiousness.
            <br></br><br></br>
            When forming a team, it is important to consider the personalities, learning styles, strengths, and weaknesses of all team members. This can help to ensure that the team is well-balanced and has a diverse range of skills and perspectives. As an introverted and intuitive thinker, I can contribute creative and analytical thinking to the team. My high scores in Openness to Experience, Agreeableness, and Conscientiousness indicate that I am open to new ideas, cooperative, and organized. However, my high score in Neuroticism may make me anxious and self-conscious. Though throughout my career I have worked to improve my ability to be socially engaged and to trust my teammates, this is still something to be conscious of. Additionally, my kinaesthetic learning style means that I learn best through hands-on experience, so I may benefit from having opportunities to apply my knowledge and skills in practical ways. I may also need to be mindful of staying at the pace of other team members who may have different learning styles and may need more time to process information and ideas. Overall, it is important to consider the unique characteristics of all team members and to provide support and accommodations as needed to foster a successful and collaborative team environment.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PersonalProfile