import React from "react";
import "./Styles.css";
export class Output extends React.Component {
  render() {
    return (
      <div className="result-block">
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}
