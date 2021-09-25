import React from 'react'
// import Card from './Card'
import './Card.css'
import Card from './Card'

function Journey() {
    return (
        <div className="container  text-center text-light">
            <i className="fas fa-code"></i>
            <h1 className="text-gold header">My Journey</h1>
            <h6>For several years from 2015 (start collage) to Now</h6>
            Experience using 
            <div>
            <i className="icon-fa fab fa-php" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"></i>
            <i className="icon-fa fab fa-js-square"></i>
            <i className="icon-fa fab fa-html5"></i>
            <i className="icon-fa">C#</i>
            <i className="icon-fa fab fa-css3-alt"></i>
            <i className="icon-fa fab fa-react"></i>
            </div>
            
            <div className="row">
                <div className="col-md-3 col-6 my-5">
                    3
                    <br />
                    Management System
                </div>
                <div className="col-md-3 col-6  my-5">
                    3
                    <br />
                    Company Profile
                </div>
                <div className="col-md-3 col-6  my-5">
                    3
                    <br />
                    Reading Platform
                </div>
                <div className="col-md-3 col-6  my-5">
                    3
                    <br />
                    Management System
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="portfolio/assets/images/img-9.jpg"
                        text="Management System"
                        label="Management System"
                        path="/service"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="portfolio/assets/images/img-9.jpg"
                        text="this is text this is text this is text"
                        label="Adventure"
                        path="/service"
                    />
                </div>

            </div>
            
        </div>
    )
}

export default Journey
