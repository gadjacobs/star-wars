import React from 'react';
import './App.css';
import Header from './Components/Header';
import Starships from './Components/Starships';
import Planets from './Components/Planets';
import Characters from './Components/Characters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
      <Header />
      <Starships />
      <Planets />
      <Characters />
    </div>
    );
  }
}

export default App;
