import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <h5> Need Help?</h5>
            <button type="button" class="btn">
              Contact Us
            </button>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className=" d-lg-flex justify-content-around">
              <div className="support-links">
                <h5> Customer Support</h5>
                <ul className="p-0">
                  <li>Returns & Warranty </li>
                  <li>Products</li>
                  <li>Payments</li>
                  <li>Shipping </li>
                </ul>
              </div>
              <div className="info-links">
                <h5> Coperate Info</h5>
                <ul className="p-0">
                  <li>About Us </li>
                  <li>Products</li>
                  <li>Payments</li>
                  <li>Shipping </li>
                </ul>
              </div>

              <div className="location">
                <h5> Location</h5>
                <p>
                  Corporate Office,
                  <br /> Marasi Dr - Business Bay
                  <br /> Bay Square - Dubai
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <h5>PHARMASTORE</h5>
            <ul className="social-links d-flex justify-content-start p-0">
              <li>
                <a href="" >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.9167 12.5C22.9167 6.75004 18.25 2.08337 12.5 2.08337C6.75001 2.08337 2.08334 6.75004 2.08334 12.5C2.08334 17.5417 5.66668 21.7396 10.4167 22.7084V15.625H8.33334V12.5H10.4167V9.89587C10.4167 7.88546 12.0521 6.25004 14.0625 6.25004H16.6667V9.37504H14.5833C14.0104 9.37504 13.5417 9.84379 13.5417 10.4167V12.5H16.6667V15.625H13.5417V22.8646C18.8021 22.3438 22.9167 17.9063 22.9167 12.5Z"
                      fill="#26328C"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3959 6.24996C22.5938 6.61454 21.7292 6.85413 20.8334 6.96871C21.75 6.41663 22.4584 5.54163 22.7917 4.48954C21.9271 5.01038 20.9688 5.37496 19.9584 5.58329C19.1354 4.68746 17.9792 4.16663 16.6667 4.16663C14.2188 4.16663 12.2188 6.16663 12.2188 8.63538C12.2188 8.98954 12.2604 9.33329 12.3334 9.65621C8.62502 9.46871 5.32294 7.68746 3.12502 4.98954C2.7396 5.64579 2.52085 6.41663 2.52085 7.22913C2.52085 8.78121 3.3021 10.1562 4.51044 10.9375C3.77085 10.9375 3.08335 10.7291 2.47919 10.4166V10.4479C2.47919 12.6145 4.02085 14.427 6.06252 14.8333C5.40703 15.0127 4.71887 15.0376 4.0521 14.9062C4.33503 15.7942 4.88912 16.5712 5.6365 17.128C6.38387 17.6848 7.28694 17.9934 8.21877 18.0104C6.63922 19.2608 4.68127 19.9367 2.66669 19.927C2.31252 19.927 1.95835 19.9062 1.60419 19.8645C3.58335 21.1354 5.93752 21.875 8.45835 21.875C16.6667 21.875 21.1771 15.0625 21.1771 9.15621C21.1771 8.95829 21.1771 8.77079 21.1667 8.57288C22.0417 7.94788 22.7917 7.15621 23.3959 6.24996Z"
                      fill="#26328C"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4166 15.625L15.8229 12.5L10.4166 9.37504V15.625ZM22.4583 7.46879C22.5937 7.95837 22.6875 8.61462 22.75 9.44796C22.8229 10.2813 22.8541 11 22.8541 11.625L22.9166 12.5C22.9166 14.7813 22.75 16.4584 22.4583 17.5313C22.1979 18.4688 21.5937 19.073 20.6562 19.3334C20.1666 19.4688 19.2708 19.5625 17.8958 19.625C16.5416 19.698 15.3021 19.7292 14.1562 19.7292L12.5 19.7917C8.1354 19.7917 5.41665 19.625 4.34373 19.3334C3.40623 19.073 2.80206 18.4688 2.54165 17.5313C2.40623 17.0417 2.31248 16.3855 2.24998 15.5521C2.17706 14.7188 2.14581 14 2.14581 13.375L2.08331 12.5C2.08331 10.2188 2.24998 8.54171 2.54165 7.46879C2.80206 6.53129 3.40623 5.92712 4.34373 5.66671C4.83331 5.53129 5.72915 5.43754 7.10415 5.37504C8.45831 5.30212 9.6979 5.27087 10.8437 5.27087L12.5 5.20837C16.8646 5.20837 19.5833 5.37504 20.6562 5.66671C21.5937 5.92712 22.1979 6.53129 22.4583 7.46879Z"
                      fill="#26328C"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
