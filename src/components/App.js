import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class App extends Component {

  render() {
    return (
      <div>
          <input type="submit"
                 ref={(input)=>this.input = input}
                 placeholder="Mondays breakfast"

          />
      </div>
    );
  }
}

export default App;
