import React from "react";
import Header from "./Components/Header";
import ShipList from "./Components/ShipList";
import PlanetList from "./Components/PlanetList";
import CharacterList from "./Components/CharacterList";
import "./App.css";
import Spinner from "react-spinkit";
import AllPeople from "./Components/AllPeople";
import AllShips from "./Components/AllShips";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      route: "home",
      currentPage: 3,
      starShips: [],
      characters: [],
      planets: []
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    const fetchPeople = pageNo => {
      fetch(`https://swapi.co/api/people/?page=${pageNo}`)
        .then(response => response.json())
        .then(people => this.setState({ characters: people.results }));
    };
    const fetchStarShips = pageNo => {
      fetch(`https://swapi.co/api/starships/?page=${pageNo}`)
        .then(response => response.json())
        .then(ships => this.setState({ starShips: ships.results }));
    };
    const fetchPlanets = pageNo => {
      fetch(`https://swapi.co/api/planets/?page=${pageNo}`)
        .then(response => response.json())
        .then(planets => this.setState({ planets: planets.results }));
    };

    fetchPeople(2);
    fetchStarShips(2);
    fetchPlanets(2);
  }

  // onNextClick = () => {
  //   this.setState({ currentPage: this.state.currentPage++})
  // }

  // onPrevClick = () => {
  //   this.setState({ currentPage: this.state.currentPage--})
  // }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    const { characters, planets, starShips, searchField } = this.state;

    const filteredPeople = characters.filter(people => {
      return people.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    const filteredPlanets = planets.filter(planets => {
      return planets.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    const filteredShips = starShips.filter(ships => {
      return ships.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    let searchPhrase;
    if (searchField !== "") {
      searchPhrase = (
        <h2 className="tc">Showing search results for: {searchField}</h2>
      );
    }

    const { route } = this.state;

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
        {route === "people" ? (
          <div>
            <AllPeople
              onRouteChange={this.onRouteChange}
              onNextClick={this.onNextClick}
              onPrevClick={this.onPrevClick}
              people={filteredPeople}
            />
          </div>
        ) : route === "ships" ? (
          <div>
            <AllShips
              onRouteChange={this.onRouteChange}
              ships={filteredShips}
            />
          </div>
        ) : (
          <div>
            <ShipList
              onRouteChange={this.onRouteChange}
              ships={filteredShips}
            />
            <PlanetList planets={filteredPlanets} />
            <CharacterList
              onRouteChange={this.onRouteChange}
              people={filteredPeople}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
