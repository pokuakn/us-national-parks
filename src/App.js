import React from "react";
import Parks from "./components/parks";

export default class App extends React.Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
    console.log("this.state.seen:", this.state.seen);
  };

  render() {
    return (
      <div className="App">
        <h1>US National Parks</h1>
        <div className="container">
          <Parks />
        </div>
      </div>
    );
  }
}
