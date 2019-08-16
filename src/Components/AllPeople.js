import React from "react";
import Charatcters from "./Characters";
import Heading from "./Heading";

class AllPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextShip: null,
      total: null,
      per_page: null,
      current_page: null
    };
  }
  render() {
    const {people} = this.props;
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
        <div class="flex items-center justify-center pa4">
          <button
            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
          >
            <svg
              class="w1"
              data-icon="chevronLeft"
              viewBox="0 0 32 32"
              style={{ fill: "currentcolor" }}
            >
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
            </svg>
            <span class="pl1">Previous</span>
          </button>
          <button
            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
          >
            <span class="pr1">Next</span>
            <svg
              class="w1"
              data-icon="chevronRight"
              viewBox="0 0 32 32"
              style={{ fill: "currentcolor" }}
            >
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default AllPeople;
