import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function OfferBanner() {
  return (
    <section className="offer">
      <div className="container offer-box ">
        <div className="row gx-5">
          <div className="col-lg-6 col-md-12  ">
            <h5>FLASH FRIDAY SALE</h5>
            <h3>50% OFF </h3>
            <button className="btn btn-shop">Shop Now</button>
          </div>
          <div className="col-lg-6 col-md-12 position-relative ">
            <div className="position-absolute top-50 start-0 translate-middle">
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.2212 0.818791L21.5037 5.80633L27.3225 32.3101L0.818794 38.1289L5.80633 60.8464L32.3101 55.0276L38.1289 81.5313L60.8464 76.5438L55.0276 50.04L81.5313 44.2212L76.5438 21.5037L50.04 27.3225L44.2212 0.818791Z"
                  fill="white"
                />
              </svg>
            </div>
            <img
              src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-vape-e-liquid-dropper-bottle-set-in-black-and-white-color-png-image_4629266.png"
              width="200"
            />
            <div className="position-absolute top-100 start-100 translate-middle">
              <svg
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.2212 0.818791L21.5037 5.80633L27.3225 32.3101L0.818794 38.1289L5.80633 60.8464L32.3101 55.0276L38.1289 81.5313L60.8464 76.5438L55.0276 50.04L81.5313 44.2212L76.5438 21.5037L50.04 27.3225L44.2212 0.818791Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
