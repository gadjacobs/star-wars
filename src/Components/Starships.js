import React from 'react';
import Heading from './Heading';

const Starships = () => {
    return (
        <div>
            <Heading title="Popular Starships" />
            <div class="dt-ns dt--fixed-ns">
                <div class="dtc-ns tc grow">
                    <article class="ba b--black-10 w-80 center">
                        <img
                        src={process.env.PUBLIC_URL + "/assets/starship-4.jpg"}
                        class="db w-100 br--top"
                        alt=""
                        />
                        <div class="pa2 tl ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                            <h2 class="f5 f4-ns mv0">Ghost</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray">
                            The Star Wars API, or "swapi" (Swah-pee) is the world's first
                            quantified and programmatically-accessible data source for all
                            the data from the Star Wars canon universe!
                        </p>
                        <div class="flex items-center justify-center">
                            <a
                            href="#0"
                            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                            >
                            <span class="pr1">Read More</span>
                            <svg
                                class="w1"
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
                <div class="dtc-ns tc grow">
                    <article class="ba b--black-10 w-80 center">
                        <img
                        src={process.env.PUBLIC_URL + "/assets/starship-2.jpg"}
                        class="db w-100 br--top"
                        alt=""
                        />
                        <div class="pa2 tl ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                            <h2 class="f5 f4-ns mv0">Ghost</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray">
                            The Star Wars API, or "swapi" (Swah-pee) is the world's first
                            quantified and programmatically-accessible data source for all
                            the data from the Star Wars canon universe!
                        </p>
                        <div class="flex items-center justify-center">
                            <a
                            href="#0"
                            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                            >
                            <span class="pr1">Read More</span>
                            <svg
                                class="w1"
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
                <div class="dtc-ns tc grow">
                    <article class="ba b--black-10 w-80 center">
                        <img
                        src={process.env.PUBLIC_URL + "/assets/starship-3.jpg"}
                        class="db w-100 br--top"
                        alt=""
                        />
                        <div class="pa2 tl ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                            <h2 class="f5 f4-ns mv0">Ghost</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray">
                            The Star Wars API, or "swapi" (Swah-pee) is the world's first
                            quantified and programmatically-accessible data source for all
                            the data from the Star Wars canon universe!
                        </p>
                        <div class="flex items-center justify-center">
                            <a
                            href="#0"
                            class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
                            >
                            <span class="pr1">Read More</span>
                            <svg
                                class="w1"
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
        </div>
    );
}

export default Starships;