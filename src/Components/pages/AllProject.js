import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Data from '../json/project_list.json';
import './AllProject.css'

class AllProject extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: Data,
            projectList_backup: []
        }
    }

    componentDidMount(){
        this.setState({
            projectList_backup: this.state.data.filter(obj => 
                (this.props.match.params.type) ? obj.type===this.props.match.params.type : obj).reverse(),
            data: this.state.data.filter(obj => 
                (this.props.match.params.type) ? obj.type===this.props.match.params.type : obj).reverse()
        });
    }

    searchProject = (event) => {
        this.setState({
            data : this.state.projectList_backup.filter((obj) =>
				new RegExp(event.target.value, "i").exec(obj.name)),
        });
	}

    render() {
        const style = "disabled";
        const checkAllProject = (this.props.match.params.type) ? null : style;
        
        return(
            <>           
                <div className="header-overflow-project mx-auto" id="journey"><h3>All Projects</h3>{this.props.match.params.type}</div>
                <div className="container rounded-3 bg-light pt-5">
                    <div className="row container">
                        <div className="col-md-4">
                            <Link className="btn btn-warning my-4 col-md-12" to="/portfolio" >
                                Back to my journey
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control my-4" placeholder="search.." onChange={this.searchProject} />
                        </div>
                        <div className="col-md-2">
                            <Link className={`btn btn-warning my-4 col-md-12 ${checkAllProject}`} to="/portfolio/all-project" >
                                All Projects
                            </Link>
                        </div>
                    </div>
                        
                    <div className="row">           
                        <small className="mb-3 text-center">{this.state.data.length} found</small>            
                            {this.state.data.map(obj =>

                                <div className="col-lg-4 col-md-6 col-12">
                                    <Card
                                        src={obj.path}
                                        text={obj.desc}
                                        label={obj.name}
                                        path="/service"
                                    />
                                </div>
                                
                            )}

                    </div>
                    <div className="row">
                        <Link className="btn btn-warning mx-auto mb-3 col-md-4" to="/portfolio" >
                            Back to my journey
                        </Link>
                    </div>
                                        
                </div>

            </>

        )


    }


}

export default AllProject