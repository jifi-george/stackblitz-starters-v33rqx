import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function Product({ name, price, description, image }) {
  return (
    <div className="card border-0 slider px-2 product bg-light">
      <img
        src={
          image
            ? image
            : 'https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-vape-e-liquid-dropper-bottle-set-in-black-and-white-color-png-image_4629266.png'
        }
        className="card-img-top"
        alt="Card image cap"
      />
      <div className="card-body">
        <p className="card-title">{name ? name : 'Product Name'}</p>
        <p className="card-text text-left">
          {description ? description : 'Product Description'}
        </p>
        <p className="card-text price">
          {price ? price : '$99'}
          <span className="original-price px-2">$120</span>
          <span className="discount">25%OFF</span>
        </p>
      </div>
    </div>
  );
}
