import React, { useState, useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import client1 from "../assets/img/clients/client-1.png"
import client2 from "../assets/img/clients/client-2.png"
import client3 from "../assets/img/clients/client-3.png"
import client4 from "../assets/img/clients/client-4.png"
import client5 from "../assets/img/clients/client-5.png"
import client6 from "../assets/img/clients/client-6.png"
const Sponsors = () => {
    useEffect(() => {
        tns({
            container: '.spons-slider',
            slideBy: 'page',
            autoplay: false,
            mouseDrag: true,
            gutter: 0,
            nav: true,
            controls: false,
            items:2,
            responsive: {
                        0: {
                            items: 3,
                        },
                        540: { 
                            items: 4,
                        },
                        768: {
                            items: 6,
                        },
                        992: {
                            items: 6,
                        },
                        1170: {
                            items: 6,
                        }
                    }
        })
    }, [])
    
  return (
    <section id="clients" class="clients section-bg spons">
    <div class="container">
    <div class="section-title">
        <h2>Sponsors</h2>
      </div>
      <div class="row spons-slider" data-aos="zoom-in">

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client1} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client2} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client3} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client4} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client5} class="img-fluid" alt=""/>
        </div>

        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client6} class="img-fluid" alt=""/>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Sponsors