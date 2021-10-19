import React from 'react'
import './HeaderH1.css'

function HeaderH1(props) {
    return (
        <>
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="text-center text-gold header"> 
                        { props.title }
                    </h1>
                </div>
                
                <div className="col-md-3 col-sm-6 col-6 row m-auto">
                    <div className="col-8 underline"></div>
                    <div className="col-2 underline"></div>
                </div>
            </div>
            
        </>
    )
}

export default HeaderH1
