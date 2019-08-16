import React from 'react';
import Header from './Components/Header';
import ShipList from './Components/ShipList';
import PlanetList from './Components/PlanetList';
import CharacterList from './Components/CharacterList';
import './App.css';
import Spinner from 'react-spinkit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      starShips: [],
      characters: [],
      planets: []
     };

     this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/?format=json")
      .then(response => response.json())
      .then(people => this.setState({ characters: people.results }));

    fetch("https://swapi.co/api/starships/?format=json")
      .then(response => response.json())
      .then(ships => this.setState({ starShips: ships.results }));

    fetch("https://swapi.co/api/planets/?format=json")
      .then(response => response.json())
      .then(planets => this.setState({ planets: planets.results }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {

    const { characters, planets, starShips, searchField } = this.state;

    const filteredPeople = characters.filter(people => {
      return (
        people.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase())
      );
    });

    const filteredPlanets = planets.filter(planets => {
      return (
        planets.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase())
      );
    });

    const filteredShips = starShips.filter(ships => {
      return (
        ships.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase())
      );
    });

    let searchPhrase;
    if (searchField !== "") {
      searchPhrase = <h2 className="tc" >Showing search results for: {searchField}</h2>
    }

    return !characters.length && !starShips.length && !planets.length ? (
      <article class="vh-100 dt w-100">
        <div class="dtc v-mid tc white ph3 ph4-l">
          <h2 class="f6 f2-m f-subheadline-l fw6 tc">
          <Spinner name="line-scale" />
          </h2>
        </div>
      </article>
    ) : (
      <div>
      <Header SearchChange={this.onSearchChange} />
      {searchPhrase}
      <ShipList ships={filteredShips} />
      <PlanetList planets={filteredPlanets} />
      <CharacterList people={filteredPeople} />
    </div>
    );
  }
}

export default App;
