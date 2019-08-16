import React from 'react';

const Starships = ({name, model, capacity}) => {
    const min=1;
    const max=6;
    const random =
    Math.floor(Math.random() * (+max - +min)) + +min;
    return (
        <div className="fl w-100 w-third-ns pa2">
                <div className="pv4 tc grow">
                    <article className="ba b--black-10 w-90 center">
                        <img
                        src={process.env.PUBLIC_URL + `/assets/starship-${random}.jpg`}
                        className="db w-100 br--top"
                        alt=""
                        height="200px"
                        />
                        <div className="pa2 tl ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                            <h2 className="f5 f4-ns mv0">{name}</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                            <em>Model:</em> {model}
                        </p>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                            <em>Capacity:</em> {capacity}
                        </p>
                        <div className="flex items-center justify-center">
                            <a
                            href="#0"
                            className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                            >
                            <span className="pr1">Read More</span>
                            <svg
                                className="w1"
                                data-icon="chevronRight"
                                viewBox="0 0 32 32"
                                style={{ fill: "currentcolor" }}
                            >
                                <title>chevronRight icon</title>
                                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
                            </svg>
                            </a>
                        </div>
                        </div>
                    </article>
                </div>
                </div>
    );
}

export default Starships;