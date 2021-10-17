import React, { Component } from 'react';
import {Link ,BrowserRouter as Router } from "react-router-dom";

export class Newsitem extends Component {
    render() {
        let { title, content, urlToImage, url } = this.props
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="card" style={{ width: "300px", }}>
                            <img src={urlToImage} className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{content}</p>
                                <Router>
                                <Link to={url} className="btn  btn-sm btn-success ">Read More</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
