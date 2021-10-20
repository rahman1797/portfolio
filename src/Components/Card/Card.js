import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <li className="card-item mb-3">
                {/* <Link className="card-item-link" to={ props.path }> */}
                <div className="card-item-link">
                    <figure className="card-item-pic" data-label={ props.label }>
                        <img src={ props.src } className="card-item-img" alt={ props.text }></img>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">
                            { props.text }
                        </h5>
                    </div>
                </div>
                {/* </Link> */}
            </li>
        </>
    )
}

export default Card
