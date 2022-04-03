import React from 'react';
import { Button } from 'react-bootstrap';
import coverImage from '../images/bike-logo.PNG'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container mt-5 py-5'>
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-6">
                      <img className='cover-pic' src={coverImage} alt=""/>
                    </div>
                        <div className="col-md-6 card-text-contain">
                            <div className="card-body">
                                <p className="card-title title-cart display-4">See The Review<br /><span className='text-warning'>Choose The Best</span></p>
                                <p className="card-text fs-4 text-start">BikeSocial does motorcycle reviews differently. Scroll down the page and you'll find our enormous review of people. We understand that most people looking to buy a motorbike have a good idea of what they want.</p>
                            </div>
                            <div>
                            <Button className='btn-lg fs-4 fw-bold'>Live Demo</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='review demo mt-5'>
                    <h1>Some Demo Review</h1>

                </section>
        </div>
    );
};

export default Home;