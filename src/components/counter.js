import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={() => this.props.decrement()}>
          -
        </button>
        <span>{this.props.value}</span>
        <button
          className="btn btn-primary"
          onClick={() => this.props.increment()}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.deleteCounter()}
        >
          Delete
        </button>
      </div>
    );
  }
}
