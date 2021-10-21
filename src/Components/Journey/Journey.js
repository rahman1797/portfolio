import React from 'react'
// import Card from './Card'
import '../Card/Card.css'
import './Journey.css'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

function Journey() {
    return (
        <div className="container text-center text-light" id="journey">
            <i className="fas fa-code"></i>
            <h1 className="text-gold">My Journey</h1>
            <h5 className="text-blue">There is an activity that i've do since 2015 (start collage) to now</h5>
            <div className="text-muted mb-3">Technology I've used</div>
            <div className="scroll-x alert bg-light rounded-3 ">
                <i className="icon-fa devicon-php-plain colored" data-toggle="tooltip" data-placement="bottom" title="PHP - More than 5 years"></i>
                <i className="icon-fa devicon-css3-plain colored" data-toggle="tooltip" data-placement="bottom" title="CSS - More than 5 years"></i>            
                <i className="icon-fa devicon-html5-plain colored" data-toggle="tooltip" data-placement="bottom" title="HTML - More than 5 years"></i>
                <i className="icon-fa devicon-mysql-plain colored" data-toggle="tooltip" data-placement="bottom" title="MySql - More than 5 years"></i>
                <i className="icon-fa devicon-codeigniter-plain colored" data-toggle="tooltip" data-placement="bottom" title=" CodeIgniter - More than 5 years"></i>
                <i className="icon-fa devicon-bootstrap-plain colored" data-toggle="tooltip" data-placement="bottom" title="Bootstrap - More than 4 years"></i>
                <i className="icon-fa devicon-javascript-plain colored" data-toggle="tooltip" data-placement="bottom" title="Javascript - More than 3 years"></i>
                <i className="icon-fa devicon-jquery-plain colored" data-toggle="tooltip" data-placement="bottom" title="jQuery - More than 3 years"></i>
                <i className="icon-fa devicon-git-plain colored" data-toggle="tooltip" data-placement="bottom" title="Git - More than 2 years"></i>
                <i className="icon-fa devicon-csharp-plain colored" data-toggle="tooltip" data-placement="bottom" title="C# - More than 1 years"></i>
                <i className="icon-fa devicon-microsoftsqlserver-plain colored" data-toggle="tooltip" data-placement="bottom" title="SQL Server - More than 1 years"></i>
                <i className="icon-fa devicon-dotnetcore-plain colored" data-toggle="tooltip" data-placement="bottom" title=".NET Core - More than 1 years"></i>
                <i className="icon-fa devicon-laravel-plain colored" data-toggle="tooltip" data-placement="bottom" title="Laravel - More than 1 years"></i>
                <i className="icon-fa devicon-java-plain colored" data-toggle="tooltip" data-placement="bottom" title="Java - About 4 months"></i>
                <i className="icon-fa devicon-react-original colored" data-toggle="tooltip" data-placement="bottom" title="ReactJS - About 3 months"></i>
            </div>
            
            <div className="row my-5">
                <div className="col-md-3 col-6 row mx-auto mb-3">
                    <div className="mx-auto card-journey row">
                        <div className="col-12">
                            <h3>2</h3>
                        </div>
                        <div className="col-12">
                            <h6>Management System</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6 row mx-auto mb-3">
                    <div className="mx-auto card-journey row">
                        <div className="col-12">
                            <h3>2</h3>
                        </div>
                        <div className="col-12">
                            <h6>Company Profile</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6 row mx-auto mb-3">
                    <div className="mx-auto card-journey row">
                        <div className="col-12">
                            <h3>1</h3>
                        </div>
                        <div className="col-12">
                            <h6>News</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6 row mx-auto mb-3">
                    <div className="mx-auto card-journey row">
                        <div className="col-12">
                            <h3>3</h3>
                        </div>
                        <div className="col-12">
                            <h6>Administration</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6 row mx-auto mb-3">
                    <div className="mx-auto card-journey row">
                        <div className="col-12">
                            <h3>3</h3>
                        </div>
                        <div className="col-12">
                            <h6>Others</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="/portfolio/assets/images/Management/SIM-1.jpg"
                        text="A system that can be used to manage resources"
                        label="Management System"
                        path="/service"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="/portfolio/assets/images/CompanyProfile/Eska-1.jpg"
                        text="Website that contains information about the company / organization"
                        label="Company Profile"
                        path="/service"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="/portfolio/assets/images/Reading/Bookita-1.jpg"
                        text="A platform for sharing fiction stories"
                        label="Reading Platform"
                        path="/service"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="/portfolio/assets/images/News/Teknonomi-1.jpg"
                        text="A platform for sharing news information"
                        label="News"
                        path="/service"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Card
                        src="/portfolio/assets/images/other/Other-1.jpg"
                        text="Just for fun project"
                        label="Other"
                        path="/service"
                    />
                </div>
            </div>
            <Link to="/portfolio/all-project">
                <button className="btn btn-primary">See all project</button>
            </Link>
        </div>
    )
}

export default Journey
