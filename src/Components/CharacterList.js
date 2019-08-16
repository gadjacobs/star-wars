import React from 'react';
import Charatcters from './Characters';
import Heading from './Heading';

const CharacterList = ({people}) => {
    return (
        <div>
            <Heading title="Popular Characters" />
            <article class="cf">
            {people.slice(0,4).map((user, i) => {
        return (
          <Charatcters
            key={i}
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

export default CharacterList;