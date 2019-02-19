import React, { Component } from 'react';
import { AvengerList } from "./platform/avengersList.jsx";
import { AvengersListView } from "./components/avengersListView.jsx";
import './App.css';

class App extends Component {

  renderAvengersList = data => {
    return <AvengersListView data={data} />;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="jumbotron">
            <h1 className="display-4">Finding Avenger Info Was Never This Easy</h1>
            <p className="lead">Search for thier powers, detailed description and much more!</p>
          </div>
        </header>
        <main>
          <AvengerList render={this.renderAvengersList} />
        </main>
      </div>
    );
  }
}

export default App;
