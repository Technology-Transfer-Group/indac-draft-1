import React, { useState, useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

const TinySlider = ({ children, listRef }) => {
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (!slider) {
      setSlider(
        tns({
            container: '.road-map-slider',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            mouseDrag: true,
            gutter: 0,
            nav: true,
            controls: false,
            responsive: {
                0: {
                    items: 2,
                },
                540: { 
                    items: 3,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 4,
                },
                1170: {
                    items: 4,
                }
            }
        },
        {
          container: '.testimonial-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            mouseDrag: true,
            gutter: 0,
            nav: true,
            controls: false,
            responsive: {
                0: {
                    items: 1,
                },
                540: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1170: {
                    items: 3,
                }
            }
        })
      );
    }
  }, [slider, listRef]);

  return <div>{children}</div>;
};

export default TinySlider;