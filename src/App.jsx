import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import InterestInIT from './components/interest_init/InterestInIT'
import IdealJob from './components/ideal_job/IdealJob'
import PersonalProfile from './components/personal_profile/PersonalProfile'
import ProjectIdea from './components/project_idea/ProjectIdea'
import PersonalInformation from './components/personal_information/PersonalInformation'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <PersonalInformation/>
        <InterestInIT />
        <IdealJob />
        <PersonalProfile />
        <ProjectIdea />
        <Contact />
        <Footer />
    </>
  )
}

export default App