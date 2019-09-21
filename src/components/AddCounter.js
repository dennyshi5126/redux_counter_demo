import React from "react";
import { add_counter } from "../actions/actions";
import { connect } from "react-redux";

const AddCounter = ({ dispatch }) => (
  <button className="btn btn-danger" onClick={() => dispatch(add_counter())}>
    Add a counter
  </button>
);

export default connect()(AddCounter);
