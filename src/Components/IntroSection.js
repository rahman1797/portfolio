import React, {useState, useEffect} from 'react'
import './IntroSection.css'

function IntroSection() {

    const text_role = ['Fullstack Dev', 'Backend Dev', 'Frontend Dev'];
    const [role, setRole] = useState(text_role[0]);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            iteration += 1;
            setRole(text_role[iteration % text_role.length])
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="intro-section row">
                <div className="col-md-6 intro-title-name m-auto p-5 mb-5">
                    <h3>Hello_____</h3>
                    <h3>I AM MAULANA RAHMAN NUR</h3>
                    <h4>{ role }</h4>
                </div>
                <div className="col-md-6 row">
                    <img className="intro-img" src="/assets/icons/undraw_hello.svg"></img>
                </div>
            </div>
            <div className="intro-section-bottom">
            </div>
        </>
    )
}

export default IntroSection
