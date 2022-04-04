import React from 'react';
import { Button } from 'react-bootstrap';
import coverImage from '../images/bike-logo.PNG'
import useReviews from "../hooks/useReviews";
import './Home.css'
import HomeCard from '../HomeCard/HomeCard';
import { Link } from 'react-router-dom';

const Home = () => {
    let randomItem;
    const [reviews, setReviews] = useReviews();
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
                    <h1 className='home-card-title'>Some Demo Review</h1>
                    <h2>Total review: {(reviews.length)}</h2>
                    {
                        reviews.slice(0,3).map(review =><HomeCard 
                        key={review.id}
                        review = {review}
                        ></HomeCard> )
            
                    }
                   {/* <Link  to="/review">See All Review</Link> */}

                   <Link  to="/review"><button className='btn-lg btn btn-primary fs-4 fw-bold mt-5'>See All Review</button></Link>
                </section>
        </div>
    );
};

export default Home;