import React from 'react';
import Heading from './Heading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { publicDecrypt } from 'crypto';

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }

      ]
        };
        return (
          <div className="container">
            <Heading title='Popular Planets' />
            <Slider {...settings}>
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/assets/planet-1.jpg"} />
                <div class="text">Corellia</div>
              </div>
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/assets/planet-2.jpg"} />
                <div class="text">Endor</div>
              </div>
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/assets/planet-3.jpg"} />
                <div class="text">Ord Mantell</div>
              </div>
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/assets/planet-1.jpg"} />
                <div class="text">Corellia</div>
              </div>
            </Slider>
          </div>
        );
      }
}

export default Planets;