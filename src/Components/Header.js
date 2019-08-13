import React from 'react';
import 'tachyons';

const Header = () => {
    return (
            <header class="sans-serif">
  <div class="cover bg-left bg-center-l" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/hero-banner.jpg)"}}>
    <div class="pb5 pb6-m pb7-l">
      <nav class="dt w-100 center">
        <div class="dtc w2 v-mid pa3">
          <a href="/" class="dib pa4 grow-large">
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt='' width="130px" height="auto" />
          </a>
        </div>

      </nav>
      <div class="tc ph3">

        <h1 class="f2 f1-l white-90 mb0 lh-title"><img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt='' width="130px" height="auto" /> Directory</h1>
        <hr width="25%" />
        <h2 class="fw1 f3 white-80">Find your favorite Characters, Films, Species,</h2> <h2 class="fw1 f3 white-80">Starships and Planets</h2>
        <input
        type="search"
        className="pa3 ba w-60 h3 br3"
        placeholder="Enter a search term"
      />
      </div>
    </div>
  </div>
</header>
    );
}

export default Header;