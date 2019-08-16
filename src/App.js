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
      people_total: null,
      people_per_page: null,
      people_current_page: 1,
      ships_total: null,
      ships_per_page: null,
      ships_current_page: 1,
      starShips: [],
      characters: [],
      planets: []
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  fetchPeople = pageNo => {
    fetch(`https://swapi.co/api/people/?page=${pageNo}`)
      .then(response => response.json())
      .then(people =>
        this.setState({
          characters: people.results,
          people_total: people.count,
          people_per_page: 10,
          people_current_page: pageNo
        })
      );
  };
  fetchStarShips = pageNo => {
    fetch(`https://swapi.co/api/starships/?page=${pageNo}`)
      .then(response => response.json())
      .then(ships =>
        this.setState({
          starShips: ships.results,
          ships_total: ships.count,
          ships_per_page: 10,
          ships_current_page: pageNo
        })
      );
  };
  fetchPlanets = pageNo => {
    fetch(`https://swapi.co/api/planets/?page=${pageNo}`)
      .then(response => response.json())
      .then(planets => this.setState({ planets: planets.results }));
  };

  componentDidMount() {
    this.fetchPeople(1);
    this.fetchStarShips(1);
    this.fetchPlanets(1);
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
    const { characters, planets, starShips, searchField, people_current_page, people_per_page, people_total, ships_current_page, ships_per_page, ships_total } = this.state;

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
              people={filteredPeople}
              fetch={this.fetchPeople}
              total={people_total}
              page={ships_current_page}
              perPage={people_per_page}
            />
          </div>
        ) : route === "ships" ? (
          <div>
            <AllShips
              onRouteChange={this.onRouteChange}
              ships={filteredShips}
              fetch={this.fetchStarShips}
              total={ships_total}
              page={ships_current_page}
              perPage={ships_per_page}
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
