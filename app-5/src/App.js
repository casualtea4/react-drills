import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg'}/>
      </div>
    );
  }
}

export default App;
