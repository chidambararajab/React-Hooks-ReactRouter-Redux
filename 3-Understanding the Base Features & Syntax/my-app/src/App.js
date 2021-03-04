import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "chid", age: 24 },
      { name: "karthi", age: 23 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Learn React</h1>
        <button>Toggle</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          my hobbies are Reading.
        </Person>
      </div>
    );
  }
}

export default App;
