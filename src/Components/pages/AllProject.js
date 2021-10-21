import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Data from '../json/project_list.json';
import './AllProject.css'

class AllProject extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count_project: 0,
            data: Data,
            projectList_backup: []
        }
    }

    componentDidMount(){
        this.setState({
            projectList_backup: this.state.data.reverse(),
            count_project: this.state.data.length,
            data: this.state.data.reverse()
        });
    }

    searchProject = (event) => {
		this.setState({
            count_project: this.state.data.length,
			data : this.state.projectList_backup.filter((obj) =>
				new RegExp(event.target.value, "i").exec(obj.name))
            
		})
	}

    render() {
        

        return(

            <>           
                <div className="header-overflow-project mx-auto"><h3>All Projects</h3></div>
                <div className="container rounded-3 bg-light pt-5">
                    <input type="text" className="form-control my-4 w-50 mx-auto" placeholder="search.." onChange={this.searchProject} />
                    <div className="row">           
                    <small className="mb-3 text-center">{this.state.count_project} found</small>            
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
                            Close
                        </Link>
                    </div>
                    
                    
                    
                </div>

            </>

        )


    }


}

export default AllProject