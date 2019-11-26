import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor(){
  super();
  this.state={
    filterString:'',
    array:['ben','benny','benji']
  }
}

handleChange(filter){
  this.setState({filterString:filter})
}

  render() {
    let displayArray= this.state.array.filter((e,i)=>{return e.includes(this.state.filterString)}).map((e,i)=>{return <h2 key={i}>{e}</h2>})
    return (
      <div className="App">
        <input onChange={e=>this.handleChange(e.target.value)}type='text'/>
        {displayArray}
      </div>
    );
  }
}

export default App;
