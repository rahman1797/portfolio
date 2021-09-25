import React from 'react'
import IntroSection from '../IntroSection'
import AboutMe from '../AboutMe'
import Education from '../Education'
import InDevelopment from '../InDevelopment'
import Journey from '../Journey'

function Home() {
    return (
        <>
            <IntroSection title="I'm Maulana Rahman Nur" />
            <AboutMe title="About Me" />
            <Journey />
            <Education title="Education" />
            <InDevelopment />
        </>
    )
}

export default Home
