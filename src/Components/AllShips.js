import React from 'react';
import Starships from './Starships';
import Heading from './Heading';

const AllShips = ({ships}) => {
    return (
        <div>
            <Heading title="Popular Starships" />
            <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
            {ships.map((user, i) => {
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
        </div>
    );
}

export default AllShips;