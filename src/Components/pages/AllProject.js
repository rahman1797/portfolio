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
                                
                <div className="header-overflow-project mx-auto"><h3>All Projects</h3></div>
                <div className="container rounded-3 bg-light pt-5">
                    <input type="text" className="form-control my-4 w-50 mx-auto" placeholder="search.." />
                    <div className="row">                       
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
                    
                    
                </div>

            </>

        )


    }


}

export default AllProject