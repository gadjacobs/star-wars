import React from 'react';
import 'tachyons';
import SearchBox from './SearchBox';
import NavBar from './NavBar';

const Header = ({SearchChange}) => {
    return (
      <header className="sans-serif">
        <div
          className="cover bg-left bg-center-l"
          style={{
            backgroundImage:
              "url(" + process.env.PUBLIC_URL + "/assets/hero-banner.jpg)"
          }}
        >
          <div className="pb5 pb6-m pb7-l">
            <NavBar />
            <div className="tc ph3">
              <h1 className="f2 f1-l white-90 mb0 lh-title">
                <img
                  src={process.env.PUBLIC_URL + "/assets/logo.png"}
                  alt=""
                  width="130px"
                  height="auto"
                /> Directory
              </h1>
              <hr width="25%" />
              <h2 className="fw1 f3 white-80">
                Find your favorite Characters, Films, Species,
              </h2>
              <h2 className="fw1 f3 white-80">Starships and Planets</h2>
            <SearchBox SearchChange={SearchChange}/>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;