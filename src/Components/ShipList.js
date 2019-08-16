import React from 'react';
import Starships from './Starships';
import Heading from './Heading';

const ShipList = ({ships, onRouteChange}) => {
    return (
        <div>
            <Heading title="Popular Starships" />
            <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
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
<div class="flex items-center justify-center pa4">
  <button onClick={() => onRouteChange('ships')} class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 tc">
    <span class="pl1">VIEW MORE</span>
  </button>
</div>
        </div>
    );
}

export default ShipList;