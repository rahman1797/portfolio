import React, { Component } from 'react'
import { Email } from './pieces/Email'
import HeaderH1 from './pieces/HeaderH1'
import './Contact.css'

class Contact extends React.Component{

    render(){

        return(
            <div className="container bg-light">
                <div className="row mt-5">
                    <HeaderH1 title="Contact Me" className="header-overflow" />
                    <div className="row mb-5">
                        <div className="col-lg-2 card-icon">
                            <i class="icon-fa fa fa-phone-square" aria-hidden="true"></i>
                            <div className="m-auto">081280100253</div>
                        </div>
                        <div className="col-lg-4 card-icon">
                            <i class="icon-fa fa fa-envelope" aria-hidden="true"></i>
                            <div className="m-auto">maulanarahmannur67@gmail.com</div>
                        </div>
                        <div className="col-lg-3 card-icon">
                            <i class="icon-fa devicon-linkedin-plain-wordmark colored"></i>
                            <div className="m-auto">Maulana Rahman Nur</div>
                        </div>
                        <div className="col-lg-3 card-icon">
                            <i class="icon-fa devicon-github-original-wordmark colored"></i>
                            <div className="m-auto">rahman1797</div>
                        </div>
                        
                    </div>
                        
                    <div className="mx-auto col-md-6 card bg-info row">
                        <div className="email-header">
                            Direct Message
                        </div>
                        <Email />
                    </div>

                </div>

            </div>
        )
    }


}


export default Contact
