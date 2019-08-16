import React from 'react';
import Starships from './Starships';
import Heading from './Heading';

const ShipList = ({ships, onRouteChange}) => {
    return (
        <div>
            <Heading title="Popular Starships" />
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
            {ships.slice(0,3).map((user, i) => {
        return (
          <Starships
            key={i}
            name={ships[i].name}
            model={ships[i].model}
            capacity={ships[i].cargo_capacity}
          />
        );
      })}
        </div>
</div>
<div className="flex items-center justify-center pa4">
  <button onClick={() => onRouteChange('ships')} className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 tc">
    <span className="pl1">VIEW MORE</span>
  </button>
</div>
        </div>
    );
}

export default ShipList;