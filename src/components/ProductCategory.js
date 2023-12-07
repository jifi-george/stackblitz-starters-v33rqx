import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function ProductCategory() {
  return (
    <section className="product-category">
      <div className="container">
        <div className="row gx-5">
          <div className="col bg-light">
            <div className="card border-0">
              <img
                src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-white-porcelain-emulsion-dispensing-dropper-bottle-png-image_5978993.jpg"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-title">Bestsellers</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-skin-care-product-jar-beauty-3d-transparent-png-image_9125673.png"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-title">Latest Arrivals</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-white-porcelain-emulsion-dispensing-dropper-bottle-png-image_5978993.jpg"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-title">Premium Products</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-skin-care-product-jar-beauty-3d-transparent-png-image_9125673.png"
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-title">Kids Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
