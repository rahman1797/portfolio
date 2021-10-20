import React, { Component } from 'react'
import { Email } from '../pieces/Email'
import HeaderH1 from '../pieces/HeaderH1'
import './Contact.css'

class Contact extends React.Component{

    render(){

        return(
            <div className="col-md-6 mx-auto">
                <div className="row mt-5">
                    <HeaderH1 title="Contact Me" />
                    <div className="row mb-5">
                        <div className="card-icon whatsapp mx-auto">
                            <i class="icon-fa fa fa-whatsapp m-auto" aria-hidden="true"></i>
                        </div>
                        <div className="card-icon contact-default mx-auto">
                            <i class="icon-fa fa fa-phone m-auto" aria-hidden="true"></i>
                        </div>
                        <div className="card-icon contact-default mx-auto">
                            <i class="icon-fa fa fa-envelope m-auto" aria-hidden="true"></i>
                        </div>
                        <div className="card-icon linkedin mx-auto">
                            <i class="icon-fa fa fa-linkedin m-auto" aria-hidden="true"></i>                        
                        </div>
                        <div className="card-icon github mx-auto">
                            <i class="icon-fa fa fa-github m-auto" aria-hidden="true"></i>                        
                        </div>
                        
                    </div>
                        
                    <div className="mx-auto col-md-6 card-contact row">
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
