import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Rating from '../common/Rating';

export default function Testimonial({
  image,
  rating,
  testimonialContent,
  name,
}) {
  return (
    <div className="col">
      <div className="card border-0">
        <img src={image} width="80" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <Rating count={rating} />
          </p>
          <div className="card-text content align-center">
            {testimonialContent}
          </div>
          <div className="client-name align-center">{name}</div>
        </div>
      </div>
    </div>
  );
}
