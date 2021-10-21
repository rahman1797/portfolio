import React, { Component } from 'react'
import { Email } from '../pieces/Email'
import HeaderH1 from '../pieces/HeaderH1'
import './Contact.css'

class Contact extends React.Component{

    render(){

        return(

            <div className="container row mx-auto mt-5">  
            <HeaderH1 title="Contact Me" />
                <div className="col-md-6">
                    <iframe className="mt-5 w-100 rounded-1" style={{ height:500 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7124669788336!2d106.87920163463399!3d-6.301460663420311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed63932f8c61%3A0xe5524f6543553a96!2s10%2C%20Jl.%20Gotong%20Royong%20No.8%2C%20RW.4%2C%20Dukuh%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013550!5e0!3m2!1sen!2sid!4v1634806251158!5m2!1sen!2sid" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <div className="row mt-5">
                        
                        <div className="col-md-9 row mb-5 mx-auto">
                                <div className="card-icon whatsapp mx-auto">
                                    <i class="icon-contact fa fa-whatsapp m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon contact-default mx-auto">
                                    <i class="icon-contact fa fa-phone m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon contact-default mx-auto">
                                    <i class="icon-contact fa fa-envelope m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon linkedin mx-auto">
                                    <i class="icon-contact fa fa-linkedin m-auto" aria-hidden="true"></i>                        
                                </div>
                                <div className="card-icon github mx-auto">
                                    <i class="icon-contact fa fa-github m-auto" aria-hidden="true"></i>                        
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
            </div>
            
        )
    }


}


export default Contact
