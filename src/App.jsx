import React, { Component } from "react";
import "./style.css";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25 2020",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div class="App">
        <div class="heading"> Countdown to {this.state.deadline}</div>

        <div>
          <Clock deadline={this.state.deadline} />
        </div>

        <div>
          <input class="form"
            onChange={event => {
              this.setState({ newDeadline: event.target.value });
            }}
            placeholder="  new Date"
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
