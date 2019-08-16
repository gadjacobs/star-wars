import React from "react";
import Starships from "./Starships";
import Heading from "./Heading";

class AllShips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ships, fetch, total, perPage, page } = this.props;
    const pageNumbers = [];
    let renderPageNumbers;

    if (total !== null) {
      for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = page === number ? "active" : '';

        return (
          <button
          onClick={() => fetch(number)}
            key={number}
            className={`f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box ${classes}`}
          >
            <span class="pr1">{number}</span>
          </button>
        );
      });
    }
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
        <div class="flex items-center justify-center pa4">
          <button
            onClick={() => fetch(1)}
            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
          >
            <span class="pl1">First</span>
          </button>
          {renderPageNumbers}
          <button
            onClick={() => fetch(2)}
            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
          >
            <span class="pr1">Last</span>
          </button>
        </div>
      </div>
    );
  }
}

export default AllShips;
