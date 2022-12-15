import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Introduction from './components/introduction/Introduction'
import InterestInIT from './components/interest_init/InterestInIT'
import IdealJob from './components/ideal_job/IdealJob'
import PersonalProfile from './components/personal_profile/PersonalProfile'
import ProjectIdea from './components/project_idea/ProjectIdea'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Introduction />
        <InterestInIT />
        <IdealJob />
        <PersonalProfile />
        <ProjectIdea />
        <Footer />
    </>
  )
}

export default App