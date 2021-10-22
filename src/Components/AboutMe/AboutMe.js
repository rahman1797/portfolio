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
                    <div className="col-md-7 mb-5 px-4">
                        <h3 className="text-gold">Education</h3>
                        <p>I am bachelor of <strong>Computer Science</strong> from <strong>State University of Jakarta</strong>.</p>
                    </div>
                    <div className="col-md-5 mb-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_graduation.svg" ></img>
                    </div>
                    {/* ORGANIZATION */}
                    <div className="col-md-5 mb-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_organization.svg" ></img>
                    </div>
                    <div className="col-md-7 mb-5 px-4 text-light">
                        <h3 className="text-gold">Organization</h3>

                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    Developing and Unyealding Learn Technology (DEFAULT)
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <small className="text-muted">2019 - 2020</small>
                                        <p className="text-dark">as web developer - Create and developing web based application</p>                                
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
                                        <small className="text-muted">2019 - 2020</small>
                                        <p className="text-dark">as head of information and communication - Collect aspirations, design rules, and supervise work programs carried out by student executive institutions, information and communication divisions.</p>                                
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
                                    <small className="text-muted">2018</small>
                                    <p className="text-dark">as volunteer - Assist in the implementation of work programs, and do documentation on event activities.</p>                                </div>
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
                                    <small className="text-muted">2013 - 2015</small>
                                    <p className="text-dark">as staff - planning and implementing activities in the community.</p>                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* PERSONALITY */}
                    <div className="col-md-7 mb-5 px-4">
                        <h3 className="text-gold">Personality</h3>
                        <p>I have a personality that likes to learn new things and challenges. My experience in organization makes me easy to adapt, fast learner, respects time, and can work independently or in a team</p>
                        <p>In addition, I have an interest in the fields of education, marketplace, and medical. So, pressure is not an easy thing to make me give up because I love what I do</p>
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