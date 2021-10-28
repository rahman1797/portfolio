import React from "react";
import { Link } from "react-router-dom";
import Data from '../json/project_list.json';
import CarouselSlick from "../pieces/CarouselSlick";
import './Project.css'

class Overview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: Data,
            projectList_backup: []
        }
    }

    componentDidMount(){
        this.setState({
            data: Data.filter(obj => 
                (this.props.match.params.slug_url) ? obj.slug_url===this.props.match.params.slug_url : "No overview")
        });
    }

    typeFilter = (event) => {
        this.props.history.push(`/portfolio/project/overview/${event.target.value}`);
        this.setState({
            data: Data.filter(obj => 
                (event.target.value) ? obj.slug_url===event.target.value : "No overview")
        });
    }

    render() {
        
        return(
            <>           
                <div className="header-overflow-project mx-auto" id="journey"><h3>Projects overview</h3>{this.props.match.params.slug_url}</div>
                <div className="container project-body pt-5">
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-md-4 d-flex">
                                <Link className="btn btn-warning col-md-12 m-auto mb-2" to="/portfolio" >
                                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back to my journey
                                </Link>
                            </div>
                            <div className="col-md-8 d-flex row m-auto">
                                <div className="row m-auto">
                                    <div className="col-md-8">
                                        <select className="form-select mb-2" onChange={this.typeFilter} value={this.props.match.params.slug_url}>
                                            {
                                                Data.map( obj => 
                                                    <option value={obj.slug_url}>
                                                        {obj.name}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        
                    </div>
                        
                    <div className="row">           
                        
                        <CarouselSlick data={this.state.data} />

                        { 
                            this.state.data.map( obj => 
                                <div className="container px-5 my-4">
                                    {obj.overview}
                                </div>
                            )
                        }
                    </div>
                    <div className="row">
                        <Link className="btn btn-warning mx-auto mb-3 col-md-4 col-9" to="/portfolio" >
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back to my journey
                        </Link>
                    </div>
                                        
                </div>

            </>

        )


    }


}

export default Overview