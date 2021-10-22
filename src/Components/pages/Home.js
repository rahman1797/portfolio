import React from 'react'
import IntroSection from '../IntroSection/IntroSection'
import AboutMe from '../AboutMe/AboutMe'
import Journey from '../Journey/Journey'
import Contact from '../Contact/Contact'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AllProject from './AllProject'
import WorkExperience from '../WorkExperience/WorkExperience'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <Router>
            <>
                <IntroSection title="I'm Maulana Rahman Nur" />
                <AboutMe title="About Me" />
                <WorkExperience title="WorkExperience" />
                <Route path="/portfolio" component={Journey} exact />
                <Route path="/portfolio/all-project" component={AllProject} exact />
                <Route path="/portfolio/project/:type" component={AllProject} exact />
                <Contact />
                <Footer />
            </>
        </Router>
    )
}

export default Home
