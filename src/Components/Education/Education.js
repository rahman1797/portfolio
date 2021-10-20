import React from 'react'
import './Education.css'

function Education(props) {
    return (
        <>
        <div className="education-intro">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-4 row">
                        <img className="education-img" src="/portfolio/assets/icons/undraw_education.svg"></img>
                    </div>
                    <div className="col-md-8 mt-5 mb-4">
                        <h1 className="text-center mb-4">{ props.title }</h1>
                        <div className="row card-edu my-2 p-1">
                            <img className="col-md-3 edu-img" src="/portfolio/assets/icons/unj-logo.svg" alt="UNJ" />
                            <div className="col-md-9 row">
                                <h3 className="mt-auto">State University of Jakarta</h3>
                                <div>Computer Science</div>
                            </div>
                        </div>
                        <div className="row card-edu p-1">
                            <img className="col-md-3 edu-img" src="/portfolio/assets/icons/unj-logo.svg" alt="SMA 64" />
                            <div className="col-md-9 row">
                                <h3 className="mt-auto">64 Senior High School </h3>
                                <div>Science</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Education
