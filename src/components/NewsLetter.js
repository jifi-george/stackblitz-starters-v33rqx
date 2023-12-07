import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row row align-items-cente">
          <div className="col">
            <h3>Grab an extra 5% Discount</h3>
            <p>
              Subscribe to monthly newsletter.
              <br /> Get product updates, special offers and more weekly.
            </p>
          </div>
          <div className="col">
            <div className="newsletter-form d-flex">
              <input
                type="email"
                name="emailId"
                placeholder="Enter your mail"
              />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
