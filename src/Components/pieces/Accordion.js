import React from 'react'
import './Accordion.css'

function Accordion(props) {
    return (
        <>
            {/* <nav className="accordion arrows"> */}
                <input type="radio" name="accordion" id={props.header} />
                <section className="box">
                    <label className="box-title text-dark" for={props.header}>{props.header}</label>
                    {/* <hr className="mx-auto" /> */}
                    <label className="box-close" for="acc-close"></label>
                    <div className="box-content">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1">{props.content}</h5>
                            <small className="float-end">{props.year}</small>
                        </div>
                        <ul className="my-1 text-dark">
                            {
                                props.contentBody.map(obj =>
                                    <li>{obj}</li>
                                )
                            }
                        </ul>
                    </div>
                </section>
                
                {/* <input type="radio" name="accordion" id="cb2" />
                <section className="box">
                    <label className="box-title" for="cb2">Read me too</label>
                    <label className="box-close" for="acc-close"></label>
                    <div className="box-content">Add the class 'arrows' to nav.accordion to add dropdown arrows.</div>
                </section>
                <input type="radio" name="accordion" id="cb3" />
                <section className="box">
                    <label className="box-title" for="cb3">Item 3</label>
                    <label className="box-close" for="acc-close"></label>
                    <div className="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
                </section> */}

                {/* <input type="radio" name="accordion" id="acc-close" />
            </nav> */}
        </>
    )
}

export default Accordion
