import React, { Component } from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/index"
require('./styles/fullMain.css');

class App extends Component {
  render() {
    return (
      <div className="App">
		  <Header/>
		  <Body/>
		  <Footer/>
      </div>
    );
  }
}

export default App;
