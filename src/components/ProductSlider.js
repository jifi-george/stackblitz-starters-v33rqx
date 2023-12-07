import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function ProductSlider({ products, title }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  return (
    <section className="productSlider">
      <div className="container">
        <div className="row text-center ">
          <h3>{title}</h3>
          <div className="col">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
              ssr
              //  deviceType={deviceType}
              itemClass="image-item"
              responsive={responsive}
            >
              {products.slice(0, 4).map((item) => {
                return (
                  <Product
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
