import React, { Component } from 'react'
import { Link } from "react-router-dom";

const HomePage = () => (
    // <div className="jumbotron">
    //     <h1>Welcome to React redux customer portal</h1>
    //     <p>React, Redux and React Router for ultra-responsive web apps.</p>
    //     <Link to="about" className="btn btn-primary btn-lg">
    //         Learn more
    //     </Link>
    // </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card shadow" style={{ width: '20rem' }}>
                    <div className="inner">
                        <img src={`${process.env.PUBLIC_URL}/card1.png`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">Design</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <a href="#" className="btn btn-success">Learn more...</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card shadow" style={{ width: '20rem' }}>
                    <div className="inner">
                        <img src={`${process.env.PUBLIC_URL}/card1.png`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">Design</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <a href="#" className="btn btn-success">Learn more...</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card shadow" style={{ width: '20rem' }}>
                    <div className="inner">

                        <img src={`${process.env.PUBLIC_URL}/card1.png`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">Design</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <a href="#" className="btn btn-success">Learn more...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;