import React from "react";
import Charatcters from "./Characters";
import Heading from "./Heading";

class AllPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {people, fetch, total, perPage, page } = this.props;
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

export default AllPeople;
