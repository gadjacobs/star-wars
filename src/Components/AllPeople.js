import React from 'react';
import Charatcters from './Characters';
import Heading from './Heading';

const AllPeople = ({people}) => {
    return (
        <div>
            <Heading title="Popular Characters" />
            <article className="cf">
            {people.map((user, i) => {
        return (
          <Charatcters
            key={i}
            id={i}
            name={people[i].name}
            gender={people[i].gender}
            birthYear={people[i].birth_year}
          />
        );
      })}
            </article>
        </div>
    );
}

export default AllPeople;