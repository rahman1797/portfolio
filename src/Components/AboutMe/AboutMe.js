import React from 'react'
import './AboutMe.css'
import HeaderH1 from '../pieces/HeaderH1'

function AboutMe() {
    
    return (
        <>
            <div className="container mt-5 px-3">

                <HeaderH1 title="ABOUT ME" />
                <div className="row mt-5">
                    {/* EDUCATION */}
                    <div className="col-md-7 col-md-push-5 mb-5 px-4" data-aos='fade-right'>
                        <h3 className="text-gold">Education</h3>
                        <p>I am bachelor of <strong>Computer Science</strong> from <strong>State University of Jakarta</strong>.</p>
                    </div>
                    <div className="col-md-5 col-md-push-7 mb-5 row mx-auto" data-aos='fade-left'>
                        <img className="about-img" src="/portfolio/assets/icons/undraw_graduation.svg" alt="graduation" ></img>
                    </div>
                </div>
                <div className="row mt-3 flex-column-reverse flex-md-row">
                    {/* ORGANIZATION */}
                    <div className="col-md-5 mb-5 row mx-auto" data-aos='fade-right'>
                        <img className="about-img" src="/portfolio/assets/icons/undraw_organization.svg" alt="organization" ></img>
                    </div>
                    <div className="col-md-7 mb-5 px-4 text-light" data-aos='fade-left'>
                        <h3 className="text-gold mb-3">Organization</h3>
                        <div className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    Developing and Unyealding Learn Technology (DEFAULT)
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <div className="d-flex w-100 justify-content-between text-dark">
                                            <h5 className="mb-1">web developer</h5>
                                            <small>2017 - 2019</small>
                                        </div>
                                        <ul className="my-1 text-dark">
                                            <li>Built web based application for online legalization from lecture research</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Student Legislative Organization
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">

                                        <div className="d-flex w-100 justify-content-between text-dark">
                                            <h6 className="mb-1">head of computer science fraction and<br/> information and communication division coordinator</h6>
                                            <small>2017 - 2019</small>
                                        </div>
                                        <ul className="my-1 text-dark">
                                            <li>Coordinated members of the legislature and members of the information and communication division</li>
                                            <li>Validated and pass the rules in student government organizations</li>
                                            <li>Supervise the student executive organization institutions</li>
                                            <li>Checking and validating activity documents</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Indonesian Historical Community (KHI)
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <div className="d-flex w-100 justify-content-between text-dark">
                                            <h6 className="mb-1">photographer</h6>
                                            <small>2017 - 2019</small>
                                        </div>
                                        <ul className="my-1 text-dark">
                                            <li>Documented event activities</li>
                                            <li>Planned and executed event activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Youth Organizations
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">

                                    <div className="d-flex w-100 justify-content-between text-dark">
                                            <h6 className="mb-1">staff</h6>
                                            <small>2013 - 2015</small>
                                        </div>
                                        <ul className="my-1 text-dark">
                                            <li>planning and implementing activities in the community</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    {/* PERSONALITY */}
                    <div className="col-md-7 mb-5 px-4" data-aos='fade-right'>
                        <h3 className="text-gold">Personality and Interests</h3>
                        <p>My personality is love learning something new and challenging. My experiences in organization made me easy to adapt, fast learning, good time management, high sense of ownership, and work as a team or personal. However pressure is not the biggest thing that makes me giving up or feeling hopeless. Because I feel like I'm doing what's mine, i'll try my best that i can</p>
                        <p>In addition, I have an interest in the fields of education and marketplace (but  still possible to like another fields) and passion for frontend development, UI/UX, SEO, and other things about visualization</p>
                    </div>
                    <div className="col-md-5 row mx-auto" data-aos='fade-left'>
                        <img className="about-img" src="/portfolio/assets/icons/undraw_personalization.svg" alt="personalization"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe