import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row gx-5">
            <div className="col ">
              <h2 className="mb-2">Your Health, Our Priority.</h2>

              <p>
                Curated selection of products to support your <br />
                holistic well-being.
              </p>
              <div className="d-flex banner-button">
                <button type="button" className="btn fill-btn">
                  Shop Now
                </button>
                <button type="button" className="btn blank-btn">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col position-relative text-center">
              <div className="position-absolute bottom-0 start-0">
                <svg
                  width="113"
                  height="113"
                  viewBox="0 0 113 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60.567 0.105813L28.9207 7.05363L37.0265 43.9743L0.105791 52.0801L7.05361 83.7264L43.9743 75.6206L52.0801 112.541L83.7264 105.593L75.6206 68.6728L112.541 60.567L105.593 28.9207L68.6728 37.0265L60.567 0.105813Z"
                    fill="#26328C"
                  />
                </svg>
              </div>
              <div className="position-absolute top-100 start-100 translate-middle">
                <svg
                  width="80"
                  height="82"
                  viewBox="0 0 80 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M54.42 3.617L32.3869 0.584576L28.8491 26.2898L3.14382 22.752L0.111402 44.7851L25.8167 48.3229L22.2789 74.0282L44.312 77.0606L47.8498 51.3553L73.5551 54.8932L76.5875 32.8601L50.8822 29.3223L54.42 3.617ZM32.1502 30.6447L6.44491 27.1068L3.4125 49.1399L29.1178 52.6777L25.58 78.383L47.613 81.4154L51.1509 55.7102L76.8561 59.248L79.8886 37.2149L54.1833 33.6771L57.7211 7.97181L35.688 4.9394L32.1502 30.6447ZM36.878 6.50915L33.3401 32.2144L7.63486 28.6766L4.98226 47.95L30.6875 51.4878L27.1497 77.1931L46.4231 79.8457L49.9609 54.1404L75.6662 57.6782L78.3188 38.4048L52.6135 34.867L56.1513 9.16176L36.878 6.50915Z"
                    fill="#26328C"
                  />
                </svg>
              </div>
              <img
                src="https://png.pngtree.com/png-clipart/20230430/original/pngtree-skin-care-product-jar-beauty-3d-transparent-png-image_9125673.png"
                width="300"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
