import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import './Project.css'

class Project extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: this.props.dataRedux,
            projectList_backup: []
        }
    }

    componentDidMount(){
        this.setState({
            projectList_backup: this.props.dataRedux.filter(obj => 
                (this.props.match.params.type) ? obj.type === this.props.match.params.type : obj).reverse(),
            data: this.props.dataRedux.filter(obj => 
                (this.props.match.params.type) ? obj.type === this.props.match.params.type : obj).reverse()
        });
        window.location.href = '#journey';
    }

    searchProject = (event) => {
        this.setState({
            data : this.state.projectList_backup.filter((obj) =>
				new RegExp(event.target.value, "i").exec(obj.name)),
        });
	}

    typeFilter = (event) => {
        this.props.history.push(`/portfolio/project/${event.target.value}`);
        this.setState({
            data: this.props.dataRedux.filter(obj => 
                (event.target.value) ? obj.type === event.target.value : obj).reverse(),
            projectList_backup: this.props.dataRedux.filter(obj => 
                (event.target.value) ? obj.type === event.target.value : obj).reverse()
        });
    }

    render() {
        
        return(
            <>           
                <div className="header-overflow-project mx-auto" id="journey"><h3>All Projects</h3>{this.props.match.params.type}</div>
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
                                    <div className="col-md-4">
                                        <select className="form-select mb-2" onChange={this.typeFilter} value={this.props.match.params.type}>
                                            <option value="">All</option>
                                            <option value="management">Management</option>
                                            <option value="administration">Administration</option>
                                            <option value="reading">Reading</option>
                                            <option value="company-profile">Company Profile</option>
                                            <option value="news">News</option>
                                            <option value="other">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-md-8 form-group">
                                        <input type="text" className="form-control mb-2" placeholder="search.." onChange={this.searchProject} />
                                    </div>
                                </div>
                                
                            </div>

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
                                        url={"/portfolio/project/overview/" + obj.slug_url}
                                    />
                                </div>
                                
                            )}

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

const mapStateToProps = (state) => {
    return {
        dataRedux: state.data
    }
}

export default connect(mapStateToProps)(Project)