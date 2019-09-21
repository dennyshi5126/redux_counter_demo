import { createStore } from "redux";

function change_counter(state = {}, action) {
  switch (action.type) {
    case "DECREMENT":
      if (action.id !== state.id) return state;
      return {
        ...state,
        count: state.count - 1
      };

    case "INCREMENT":
      if (action.id !== state.id) return state;
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
}
let nextId = 0;
function reducers(state = [], action) {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, { id: nextId++, count: 0 }];
    case "DELETE_COUNTER":
      return state.filter(counter => counter.id !== action.id);
    case "DECREMENT":
      return state.map(counter => change_counter(counter, action));
    case "INCREMENT":
      return state.map(counter => change_counter(counter, action));
    default:
      return state;
  }
}

export default createStore(reducers);
