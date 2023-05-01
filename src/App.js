import Reat, { Component } from "react";
import MyfunctionalComponent from "./Components/MyFunctionalComponents";
import MyClassComponent from "./Components/MyClassComponents";
import "./Components/mystyle.css";
import { render } from "@testing-library/react";

export class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    showfunction : true,
    showclass : true,
    
  };
}
 toggleFuncomp = () => {
       this.setState((prevState) => ({
           showfunction: !prevState.showfunction,
       }));
};
toggleClasscomp = () => {
  this.setState((prevState) => ({
      showclass: !prevState.showclass,
  }));
};
render(){
  return (
    <div className="App">
    <h1 className="heading"> Styling Using Functional and Class Component </h1>
    <div className="container">
      <button className="item" style={{backgroundColor:"aqua"}} onClick={this.toggleFuncomp}>To see styling in funcional Component</button>
      <button className="item" onClick={this.toggleClasscomp}>To see styling in class Component</button>
      
      {this.state.showfunction && <MyfunctionalComponent/>}
      {this.state.showclass && <MyClassComponent/>}
   </div>
   
  </div>
  );
}
}

export default App;