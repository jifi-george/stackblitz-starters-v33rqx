import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 col-md-12 ">
            <div className="d-flex offer-box">
              <div>
                <h5>
                  FLASH FRIDAY
                  <br /> SALE
                </h5>
                <h3>50% OFF </h3>
                <button className="btn btn-shop">Shop Now</button>
              </div>
              <div>
                <img
                  src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-vape-e-liquid-dropper-bottle-set-in-black-and-white-color-png-image_4629266.png"
                  width="200"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="d-flex offer-box">
              <div>
                <h5>
                  FLASH FRIDAY
                  <br /> SALE
                </h5>
                <h3>50% OFF </h3>
                <button className="btn btn-shop">Shop Now</button>
              </div>
              <div>
                <img
                  src="https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-vape-e-liquid-dropper-bottle-set-in-black-and-white-color-png-image_4629266.png"
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
