import React from 'react';

const NavBar = () => {
    return (

      <nav className="dt w-100 center">
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib pa4 grow-large">
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt='' width="130px" height="auto" />
          </a>
        </div>

      </nav>
    );
}

export default NavBar;