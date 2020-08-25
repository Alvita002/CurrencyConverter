import React, { Component } from 'react'
import "./App.css";
import Converter from "./components/Converter";
import Inline from "./components/Inline";
import BackImage from './images/back.jpg'

const image ={
  backgroundImage: `url(${BackImage})`,
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPozition: 'center'

}

class App extends Component {
  render() {
    return (
      <div className="App" style={image}>
        <Inline></Inline>
        <Converter></Converter>
      </div>
    );
  }
}

export default App;
