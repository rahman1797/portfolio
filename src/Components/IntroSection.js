import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './IntroSection.css'
import './Button.css'

function IntroSection() {

    const text_role = [ 'Frontend Dev', 'Fullstack Dev', 'Backend Dev'];
    const [role, setRole] = useState(text_role[0]);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            iteration += 1;
            setRole(text_role[iteration % text_role.length])
        }, 1700);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="intro-section row">
                <div className="col-md-6 intro-title-name m-auto p-5 mb-5">
                    <h3>Hello_____</h3>
                    <h3>I AM MAULANA RAHMAN NUR</h3>
                    <h4>{ role }</h4>
                    <Link to="/portfolio/my-journey">
                        <button className="btn btn-secondary btn-warning mt-2">Lets see my journey <i class="fas fa-location-arrow"></i></button>
                    </Link>
                </div>
                <div className="col-md-6 row m-auto">
                    <img className="intro-img" src="/portfolio/assets/icons/undraw_hello.svg"></img>
                </div>
            </div>
            <div className="intro-section-bottom">
            </div>
        </>
    )
}

export default IntroSection
