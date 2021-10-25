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
                    <div className="col-md-7 col-md-push-5 mb-5 px-4">
                        <h3 className="text-gold">Education</h3>
                        <p>I am bachelor of <strong>Computer Science</strong> from <strong>State University of Jakarta</strong>.</p>
                    </div>
                    <div className="col-md-5 col-md-push-7 mb-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_graduation.svg" ></img>
                    </div>
                </div>
                <div className="row mt-3 flex-column-reverse flex-md-row">
                    {/* ORGANIZATION */}
                    <div className="col-md-5 mb-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_organization.svg" ></img>
                    </div>
                    <div className="col-md-7 mb-5 px-4 text-light">
                        <h3 className="text-gold mb-3">Organization</h3>
                        <div class="accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    Developing and Unyealding Learn Technology (DEFAULT)
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <div class="d-flex w-100 justify-content-between text-dark">
                                            <h5 class="mb-1">web developer</h5>
                                            <small>2019 - 2020</small>
                                        </div>
                                        <ul class="my-1 text-dark">
                                            <li>Built web based application for online legalization from lecture research</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Student Legislative Organization
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">

                                        <div class="d-flex w-100 justify-content-between text-dark">
                                            <h6 class="mb-1">head of computer science fraction and<br/> information and communication division coordinator</h6>
                                            <small>2019 - 2020</small>
                                        </div>
                                        <ul class="my-1 text-dark">
                                            <li>Coordinated members of the legislature and members of the information and communication division</li>
                                            <li>Validated and pass the rules in student government organizations</li>
                                            <li>Supervise the student executive organization institutions</li>
                                            <li>Checking and validating activity documents</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Indonesian Historical Community (KHI)
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <div class="d-flex w-100 justify-content-between text-dark">
                                            <h6 class="mb-1">photographer</h6>
                                            <small>2017 - 2019</small>
                                        </div>
                                        <ul class="my-1 text-dark">
                                            <li>Documented event activities</li>
                                            <li>Planned and executed event activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Youth Organizations
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div class="accordion-body">

                                    <div class="d-flex w-100 justify-content-between text-dark">
                                            <h6 class="mb-1">staff</h6>
                                            <small>2013 - 2015</small>
                                        </div>
                                        <ul class="my-1 text-dark">
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
                    <div className="col-md-7 mb-5 px-4">
                        <h3 className="text-gold">Personality and Interests</h3>
                        <p>I have a personality that likes to learn new things and challenges. My experience in organization makes me easy to adapt, fast learner, respects time, and can work independently or in a team. So, pressure is not an easy thing to make me give up because I love what I do</p>
                        <p>In addition, I have an interest in the fields of education and marketplace (but it's still possible to like other fields) and passion for frontend development, UI/UX, SEO, and other things about visualization </p>
                    </div>
                    <div className="col-md-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_personalization.svg" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe