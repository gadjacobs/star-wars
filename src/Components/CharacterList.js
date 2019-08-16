import React from 'react';
import Charatcters from './Characters';
import Heading from './Heading';

const CharacterList = ({people, onRouteChange}) => {
    return (
        <div>
            <Heading title="Popular Characters" />
            <article class="cf">
            {people.slice(0,2).map((user, i) => {
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

  <div class="flex items-center justify-center pa4">
  <button onClick={() => onRouteChange('people')} class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 tc">
    <span class="pl1">VIEW MORE</span>
  </button>
</div>
        </div>
    );
}

export default CharacterList;