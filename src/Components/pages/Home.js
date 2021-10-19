import React from 'react'
import IntroSection from '../IntroSection'
import AboutMe from '../AboutMe'
import Journey from '../Journey'
import Contact from '../Contact'

function Home() {
    return (
        <>
            <IntroSection title="I'm Maulana Rahman Nur" />
            <AboutMe title="About Me" />
            <Journey />
            <Contact />
        </>
    )
}

export default Home
