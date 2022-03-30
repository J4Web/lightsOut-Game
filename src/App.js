import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import Header from './Header';
/** Simple app that just shows the LightsOut game. */
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className='App'>
      <Header/>
        <Board />
        <Footer/>
      </div>
    );
  }
}

export default App;
