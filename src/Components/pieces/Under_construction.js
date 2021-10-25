import React from 'react'
import { Link } from 'react-router-dom'

function Under_construction() {

    const style = {
        width: "90%"
    }

    return (
        <div className="container py-5 px-4 bg-light rounded-3">
            <div className="row">
                <div className="col-md-6">
                   <img className="mx-auto" style={style} src="/portfolio/assets/icons/undraw_under_construction.svg" />
                </div>
                <div className="col-md-6 m-auto">
                    <h3 className="mt-3 text-center">Sorry, this page is under construction</h3>
                </div>
                <Link className="btn btn-warning mt-5 col-md-6 col-9 mx-auto mb-2" to="/portfolio" >
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back to my journey
                </Link>
            </div>
            
            
        </div>
    )
}

export default Under_construction