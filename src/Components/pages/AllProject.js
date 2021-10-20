import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from '../json/project_list.json'

class AllProject extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count_project: 0,
            data: Data
        }
    }

    componentDidMount(){
        
        this.setState({
            data: Data
        });
        console.log(this.state);
    }

    render() {

        return(

            <>

                <div className="container-fluid bg-light">

                    <div className="row">

                        {this.state.data.map(obj =>
                            
                            <Link className="col-md-4" to={"/portfolio/project/" + obj.slug_url}>
                                
                                <div className="card">
                                    <img src={obj.path}></img>
                                    <h4>{obj.name}</h4>
                                    <small className="text-muted">Year: {obj.year}</small>
                                    <div>{obj.desc}</div>
                                </div>

                            </Link>
                            
                        )}

                    </div>
                    
                    
                </div>

            </>

        )


    }


}

export default AllProject