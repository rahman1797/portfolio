import React from 'react'
import './AboutMe.css'
import HeaderH1 from '../pieces/HeaderH1'

function AboutMe() {
    return (
        <>
            <div className="container my-5 px-3">
                <HeaderH1 title="ABOUT ME" />
                <div className="row mt-5">
                    {/* EDUCATION */}
                    <div className="col-md-7 mb-5 px-4">
                        <h3 className="text-gold">Education</h3>
                        <p>Im bachelor of <strong>Computer Science</strong> from <strong>State University of Jakarta</strong>.</p>
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
                        <small>2019 - 2020</small>
                        <h5>Developing and Unyealding Learn Technology (DEFAULT)</h5>
                        <p>as web developer - Create and developing web based application</p>
                        <hr/>
                        <small>2015 - 2017</small>
                        <h5>Student Legislative Organization</h5>
                        <p>as head of information and communication - Collect aspirations, design rules, and supervise work programs carried out by student executive institutions, information and communication divisions.</p>
                        <hr/>
                        <small>2018</small>
                        <h5>Indonesian Historical Community (KHI)</h5>
                        <p>as volunteer - Assist in the implementation of work programs, and do documentation on event activities.</p>
                        <hr/>
                        <small>2013 - 2015</small>
                        <h5>Youth Organizations</h5>
                        <p>as staff - planning and implementing activities in the community.</p>
                    </div>
                    {/* PERSONALITY */}
                    <div className="col-md-7 mb-5 px-4">
                        <h3 className="text-gold">Personality</h3>
                        <p>I like an environment where we can share knowledge and experiences, help each other, so that it can help to reach our maximum ability. Challenges and new knowledge related to anything, especially about information systems.</p>
                    </div>
                    <div className="col-md-5 mb-5 row mx-auto">
                        <img className="about-img" src="/portfolio/assets/icons/undraw_personalization.svg" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe