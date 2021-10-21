import React from 'react'
import './WorkExperience.css'
import HeaderH1 from '../pieces/HeaderH1'

function WorkExperience(props) {
    return (
        <div className="container text-light mb-5 col-md-9" id="experience">
            <HeaderH1 title={props.title} />
            
            <div className="list-group">
                <div class="list-group-item list-group-item-action flex-column">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Web Developer</h5>
                        <small>August 2018 – October 2018</small>
                    </div>
                    <p className="mb-1 text-dark">
                        <ul>
                            <li>Create and developing web based application</li>
                        </ul>
                    </p>
                    <small className="text-muted">at Pusat Kajian Hadits (Internship)</small>
                </div>
                <div className="list-group-item list-group-item-action flex-column ">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Technical Consultant (Software Developer)</h5>
                    <small className="text-muted">April 2020 - Today</small>
                    </div>
                    <p className="mb-1 text-dark">
                        <ul>
                            <li>Customization Epicor ERP form and function</li>
                            <li>Build web based application for Human Resources (HR), recruitment, administration, and report system</li>
                            <li>Create learning documentation by text/video</li>
                        </ul>
                    </p>
                    <small className="text-muted">at Inti Talenta Teknologi</small>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
