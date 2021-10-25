import React, {useState} from 'react'
// import Card from './Card'
import '../Card/Card.css'
import './Journey.css'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import Data from '../json/project_list.json';

const data = Data;
const countMatchKey = (key) => {
    let count = 0;
    data.forEach(element => {
        if(element.type === key){
            count++;
        }
    });
    return count;
}

function Journey() {

    const [administration, setAdministration] = useState(countMatchKey('administration'))
    const [management, setManagement] = useState(countMatchKey('management'))
    const [reading, setReading] = useState(countMatchKey('reading'))
    const [other, setOther] = useState(countMatchKey('other'))
    const [news, setNews] = useState(countMatchKey('news'))
    const [companyProfile, setCompanyProfile] = useState(countMatchKey('company-profile'))

    return (
        <div className="container text-center text-light" id="journey">
            <i className="fas fa-code"></i>
            <h1 className="text-gold">My Journey</h1>
            <h5 className="text-blue">There is an activity that i've do since 2015 (start collage) to now</h5>
            <div className="text-muted mb-3">Technology I've used</div>
            <div className="scroll-x alert bg-light rounded-3 col-md-10 mx-auto">
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
            
            <div className="row my-5 col-md-8 mx-auto ">
                <Link to="/portfolio/project/management" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey mx-auto row">
                        <div className="col-12">
                            <h3>{ management }</h3>
                        </div>
                        <div className="col-12">
                            <h6>Management System</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio/project/company-profile" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey row mx-auto">
                        <div className="col-12">
                            <h3>{ companyProfile }</h3>
                        </div>
                        <div className="col-12">
                            <h6>Company Profile</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio/project/news" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey row mx-auto">
                        <div className="col-12">
                            <h3>{ news }</h3>
                        </div>
                        <div className="col-12">
                            <h6>News</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio/project/reading" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey row mx-auto">
                        <div className="col-12">
                            <h3>{ reading }</h3>
                        </div>
                        <div className="col-12">
                            <h6>Reading</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio/project/administration" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey row mx-auto">
                        <div className="col-12">
                            <h3>{ administration }</h3>
                        </div>
                        <div className="col-12">
                            <h6>Administration</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/portfolio/project/other" className="col-md-4 col-6 row mb-3 mx-auto">
                    <div className="card-journey row mx-auto">
                        <div className="col-12">
                            <h3>{ other }</h3>
                        </div>
                        <div className="col-12">
                            <h6>Others</h6>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/Management/Sim-1.jpg"
                        text="A system that can be used to manage resources"
                        label="Management System"
                        url="/portfolio/project/management"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/CompanyProfile/Eska-1.jpg"
                        text="Website that contains information about the company / organization"
                        label="Company Profile"
                        url="/portfolio/project/company-profile"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/News/Teknonomi-1.jpg"
                        text="A platform for sharing news information"
                        label="News"
                        url="/portfolio/project/news"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/Reading/Bookita-1.jpg"
                        text="A platform for sharing fiction stories"
                        label="Reading Platform"
                        url="/portfolio/project/reading"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/Administration/hp-1.jpg"
                        text="An administrative information system to record activities and reporting"
                        label="Administration"
                        url="/portfolio/project/administration"
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-12" data-aos='fade-up'>
                    <Card
                        src="/portfolio/assets/images/Other/Other-1.jpg"
                        text="Just for fun, training, and testing project"
                        label="Other"
                        url="/portfolio/project/other"
                    />
                </div>
            </div>
            <Link to="/portfolio/project">
                <button className="btn btn-warning">See all project</button>
            </Link>
        </div>
    )
}

export default Journey
