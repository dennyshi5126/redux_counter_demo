import React from "react";
import { connect } from "react-redux";
import Counter from "./counter";
import { on_decrement, on_increment, delete_counter } from "../actions/actions";

const CounterList = ({ counters, decrement, increment, deleteCounter }) => {
  return (
    <div>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          value={counter.count}
          decrement={() => decrement(counter.id)}
          increment={() => increment(counter.id)}
          deleteCounter={() => deleteCounter(counter.id)}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counters: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: id => dispatch(on_decrement(id)),
    increment: id => dispatch(on_increment(id)),
    deleteCounter: id => dispatch(delete_counter(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
