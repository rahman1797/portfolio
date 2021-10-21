import React, { Component } from 'react'
import { Email } from '../pieces/Email'
import HeaderH1 from '../pieces/HeaderH1'
import './Contact.css'


class Contact extends React.Component{

    goGithub = () => {
		window.location.href = "https://github.com/rahman1797";
	}

    wa_link = () => {
		window.location.href = "https://api.whatsapp.com/send?phone=6281280100253";
	}

	mail_link = () => {
		window.location.href = "mailto:maulanarahmannur67@gmail.com?Subject=Hello"
	}

	phone_link = () => {
		window.location.href = "tel:+6281280100253"
	}

    tele_link = () => {
		window.location.href = "https://t.me/mrahmannur"
	}

    linkedin_link = () => {
		window.location.href = "https://www.linkedin.com/in/maulana-rahman-nur-6529911a3/"
	}

    render(){

        return(

            <div className="container row mx-auto mt-5" id="contact">
            <HeaderH1 title="Contact Me" />
                <div className="col-md-6">
                    <iframe className="mt-5 w-100 rounded-1" style={{ height:500 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7124669788336!2d106.87920163463399!3d-6.301460663420311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed63932f8c61%3A0xe5524f6543553a96!2s10%2C%20Jl.%20Gotong%20Royong%20No.8%2C%20RW.4%2C%20Dukuh%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013550!5e0!3m2!1sen!2sid!4v1634806251158!5m2!1sen!2sid" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6">
                    <div className="row mt-5">
                        
                        <div className="col-md-9 row mb-5 mx-auto">
                                <div className="card-icon whatsapp mx-auto" onClick={this.wa_link}>
                                    <i class="icon-contact fa fa-whatsapp m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon-telegram telegram mx-auto" onClick={this.tele_link}>
                                    <i class="icon-contact-telegram fa fa-telegram m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon contact-default mx-auto" onClick={this.phone_link}>
                                    <i class="icon-contact fa fa-phone m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon contact-default mx-auto" onClick={this.mail_link}>
                                    <i class="icon-contact fa fa-envelope m-auto" aria-hidden="true"></i>
                                </div>
                                <div className="card-icon linkedin mx-auto" onClick={this.linkedin_link}>
                                    <i class="icon-contact fa fa-linkedin m-auto" aria-hidden="true"></i>                        
                                </div>
                                <div className="card-icon github mx-auto" onClick={this.goGithub}>
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
