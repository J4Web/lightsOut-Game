import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
        <Footer/>
      </div>
    );
  }
}

export default App;
