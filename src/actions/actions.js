export function add_counter() {
  return {
    type: "ADD_COUNTER"
  };
}

export function delete_counter(id) {
  return {
    type: "DELETE_COUNTER",
    id
  };
}

export function on_decrement(id) {
  return {
    type: "DECREMENT",
    id
  };
}

export function on_increment(id) {
  return {
    type: "INCREMENT",
    id
  };
}
