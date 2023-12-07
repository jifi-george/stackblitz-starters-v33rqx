import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Rating from '../common/Rating';
import Testimonial from './Testimonial';

export default function Testimonials() {
  const clients = [
    {
      id: 1,
      name: 'John  Doe',
      testimonialContent:
        'All products are of great quality and also they provide good service.',
      image:
        'https://enrol.greenspringsschool.com/wp-content/uploads/2018/07/parent-2.png',
      rating: 3,
    },
    {
      id: 2,
      name: 'John  Doe',
      testimonialContent:
        'All products are of great quality and also they provide good service.',
      image:
        'https://enrol.greenspringsschool.com/wp-content/uploads/2018/07/parent-2.png',
      rating: 4,
    },
    {
      id: 3,
      name: 'John  Doe',
      testimonialContent:
        'All products are of great quality and also they provide good service.',
      image:
        'https://enrol.greenspringsschool.com/wp-content/uploads/2018/07/parent-2.png',
      rating: 4,
    },
  ];

  return (
    <section className="testimonial">
      <div className="container text-center">
        <h3>WHAT OUR CUSTOMERS SAY..</h3>
        <div className="row gx-2">
          {clients.map((item) => {
            return (
              <div className="col testimonial-box">
                <div className="clientImg align-center pb-3">
                  <img src={item.image} width="80" />
                </div>
                <div className="rating d-flex justify-content-center">
                  <Rating count={item.rating} />
                </div>
                <div className="content align-center">
                  {item.testimonialContent}
                </div>
                <div className="client-name align-center">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
