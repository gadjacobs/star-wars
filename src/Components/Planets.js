import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {name, climate, population} = this.props;
        const min=1;
        const max=3;
        const random =
        Math.floor(Math.random() * (+max - +min)) + +min;
        return (
            <div>
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + `/assets/planet-${random}.jpg`} />
                <div class="text outline">
                    {name}
                    <p>Temperature: {climate}</p>
                    <p>population: {population}</p>
                </div>
              </div>
            </div>
        );
      }
}

export default Planets;