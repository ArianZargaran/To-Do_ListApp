import React, { Component } from "react";
import './App.css';

import {Header} from "./Header"


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello! I am the App.js (Component #1)</h1>
          <Header />
      </div>
    );
  }
}

export default App;
