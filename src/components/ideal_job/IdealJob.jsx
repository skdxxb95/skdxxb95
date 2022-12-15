import React from 'react'
import './idealjob.css'
import {MdOutlineWeb} from 'react-icons/md'
import {AiOutlinePicture} from 'react-icons/ai'

const IdealJob = () => {
  return (
    <section id='idealjob'>
      <h5>This is what I have chosen for my..</h5>
      <h2>Ideal Job</h2>
      
      <div className="container idealjob__container">
        <div className="idealjob__text">
          <p>
          My ideal job would be this position as a Full Stack Developer. It appeals to me because it requires you to have knowledge of both frontend and backend languages to develop web applications that get deployed for customer use. Climbing up the ranks in the industry of Information Technology is something I am aspiring towards for the foreseeable future, and I hope to one day take on a position like this. Designing code for applications in a strong team workspace is also something I desire about the above position as I value the importance of collaboration. I would consider myself someone who has the character traits that this job requires and someone who could contribute to the efficiency and culture of the company. I would consider myself someone with a growth mindset and am always ready to face new challenges, and over time, I'll have the required experience.
          <br></br><br></br>
          This position requires the person to have 5+ years of experience in software development, having proficient knowledge in modern JavaScript and experience in coding, testing and automation techniques using the language. It is also listed to require knowledge of libraries such as TypeScript, React, Node.js, as well as knowledge in the widely utilized language Java. Outside of these languages and libraries, it is expected that the person has adept knowledge in the overall areas of frontend and backend development. It is an expectation that the candidate is passionate about software engineering and takes pride in creating high-quality code that is maintainable and extendable. This position also requires the person to hold specific values and traits, rather than just experience itself. It is listed that they are seeking somebody who is self-motivated, has a growth mindset, has great attention to detail and is highly collaborative. Collaboration is an important factor in this position as there is a large aspect of collaboration in production management and engineering. Teamwork is also highly valued considering part of the role is to mentor others and to contribute to the culture and environment in the workplace. Though collaboration and teamwork are highly valued, so is the ability to work independently if required.
          <br></br><br></br>
          In the past, I have used the Flask framework to develop web applications with HTML, CSS, PostgreSQL, JavaScript, and Python. I have also used Bootstrap in conjunction. I have a basic understanding of the frontend and backend aspects of web development. I am comfortable with using Python, HTML, and CSS to create basic applications. React, Node.js, and Typescript are becoming popular for deploying web applications, and Java is still widely used for the backend. I have no experience with these libraries or Java, and only have a basic understanding of JavaScript for web development. Gaining proficiency in these languages and technologies would be valuable for this job and many others in the field. I am specifically lacking in JavaScript, Java, and the use of these libraries. Despite this, I am confident in my ability to collaborate and work in a team, as I have experience in team-oriented work.
          <br></br><br></br>
          To achieve this goal, I will earn my Bachelor of IT degree and continue working at my current job to improve my skills and open more opportunities for growth. My boss has suggested practicing with the Flask and React libraries, and I have already started learning Flask. I plan to continue gaining a strong understanding of its fundamentals and then move on to incorporating and expanding my knowledge of JavaScript. From there, I will experiment with React and other libraries like Node.js and Typescript, and eventually try using them together. I will also use my studies at university to improve my problem-solving skills, proficiency in Java, and ability to work in a team. After I complete my studies, I plan to continue growing in my field and believe that I will have the skills needed for this position within the required 5 years of experience.
          <br></br><br></br>
          <em>**This was written this before I took the challenge to present the assignment with React.js**</em>
          </p>
        </div>
          <div className="idealjob__right">
            <div className="idealjob__link">
              <a href="https://au.indeed.com/jobs?q=full+stack&l=Brisbane+QLD&from=searchOnHP&vjk=6ab94af8d5cf3537" target="_blank">
              <article>
                <MdOutlineWeb size='50' className='idealjob__details-icon' />
                <h3>Link to Job Advertisment</h3>
                <small>Click here to open</small>
              </article>
              </a>
            </div>
            <div className="idealjob__image">
              <a href="https://i.postimg.cc/xT9Pc8zV/0.png" target="_blank">
              <article>
                <AiOutlinePicture size='50' className='idealjob__details-icon' />
                <h3>Screenshot of Job Advertisment</h3>
                <small>Click here to open</small>
              </article>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default IdealJob