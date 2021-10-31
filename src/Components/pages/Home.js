import React from 'react'
import IntroSection from '../IntroSection/IntroSection'
import AboutMe from '../AboutMe/AboutMe'
import Journey from '../Journey/Journey'
import Contact from '../Contact/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Project from './Project'
import WorkExperience from '../WorkExperience/WorkExperience'
// import Footer from '../Footer/Footer'
import Overview from './Overview'

function Home() {
    return (
        <Router>
            <>
                <IntroSection title="I'm Maulana Rahman Nur" />
                <AboutMe title="About Me" />
                <WorkExperience title="Work Experience" />
                <Route path="/portfolio" component={Journey} exact />
                <Route path="/portfolio/project" component={Project} exact />
                <Route path="/portfolio/project/:type" component={Project} exact />
                <Route path="/portfolio/project/overview/:slug_url" component={Overview} exact />
                <Contact />
                {/* <Footer /> */}
            </>
        </Router>
    )
}

export default Home
