import React from 'react';
import Planet from './Planets';
import Heading from './Heading';
import Slider from "react-slick";

const PlanetList = ({planets}) => {
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

            {planets.slice(0,6).map((user, i) => {
        return (
          <Planet
            key={i}
            name={planets[i].name}
            climate={planets[i].climate}
            population={planets[i].population}
          />
        );
      })}

            </Slider>
          </div>
    );
}

export default PlanetList;