import React from "react";
import './Residencies.css';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';

const Residencies = () => {
  return(
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className="orangeText">Best choices</span>
            <span className="primaryText">Popular residencies</span>
        </div>
    
        <Swiper>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img src={card.image} alt="home" />

                  <span className="secundaryText r-price">
                    <span>$</span>{card.price}
                  </span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>  
  );
};

export default Residencies;