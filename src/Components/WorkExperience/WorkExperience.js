import React from 'react'
import './WorkExperience.css'
import HeaderH1 from '../pieces/HeaderH1'

function WorkExperience(props) {
    return (
        <div className="container text-light mb-5 col-md-9" id="experience">
            <HeaderH1 title={props.title} />
            
            <div className="list-group">
                
                <div className="list-group-item flex-column bg-transparent-custom">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Technical Consultant (Fullstack Developer)</h5>
                    <small>February 2020 - Now</small>
                    </div>
                    <p className="mb-1">
                        <ul>
                            <li>Customized Epicor ERP (Enterprise Resource Planning) system form, report, and function</li>
                            <li>Built web based application for HR (Human Resources), recruitment, administration, and report system</li>
                            <li>Created learning documentation by text / video</li>
                        </ul>
                    </p>
                    <small>at Inti Talenta Teknologi</small>
                </div>
                <div class="list-group-item flex-column bg-transparent-custom">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Web Developer</h5>
                        <small>August 2018 – October 2018</small>
                    </div>
                    <p className="mb-1">
                        <ul>
                            <li>Create and developing web based application</li>
                        </ul>
                    </p>
                    <small>at Pusat Kajian Hadis (Internship)</small>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
