import React from 'react';

const Characters = ({name, gender, birthYear}) => {
    const min=1;
    const max=4;
    const random =
    Math.floor(Math.random() * (+max - +min)) + +min;

    return (
        <div>

          <div className="fl w-100 w-50-ns tl">
            <article className="bt bb b--black-10 pa4">
              <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                <div className="flex flex-column flex-row-ns">
                  <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img
                      src={process.env.PUBLIC_URL + `/assets/character-${random}.jpg`}
                      className="db"
                      alt=""
                      height="200px"
                    />
                  </div>
                  <div className="w-100 w-60-ns pl3-ns">
                    <h1 className="f3 fw1 baskerville mt0 lh-title">
                      {name}
                    </h1>
                    <p className="f6 f5-l lh-copy">
                      Gender: {gender}
                    </p>
                    <p className="f6 lh-copy mv0">Born: {birthYear}</p>
                  </div>
                </div>
              </a>
            </article>
          </div>

      </div>
    );
}

export default Characters;