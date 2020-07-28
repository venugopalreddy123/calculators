import React from "react";
import { Input } from "./Input";
import { Output } from "./Output";

class App extends React.Component {
  state = {
    result: "",
  };

  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "c") {
      this.clear();
    } else if (buttonName === "ce") {
      this.backSpace();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });
  };
  calculate = () => {
    this.setState({
      result: eval(this.state.result),
    });
  };
  clear = () => {
    this.setState({
      result: "",
    });
  };
  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
        <div className="main-class">
          <Output result={this.state.result} />
          <Input buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
