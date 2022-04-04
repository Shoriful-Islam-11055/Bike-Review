import React from "react";
import './ReviewCard.css'

const reviewCard = (props) => {
  const { name, img, review, rating } = props.review;
  return (
    <div>
        <div className="card h-100 shadow-lg">
            <img src={img} className="card-img-top cart-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fs-4 fw-bold">Name : {name}</h5>
                <h5 className="card-title">Rating : {rating}</h5>
                <p className="card-text text-start fs-5"><span className="fs-5 fw-bold text-danger">Review: </span>{review}</p>
            </div>
        </div>
    </div>
  );
};

export default reviewCard;
