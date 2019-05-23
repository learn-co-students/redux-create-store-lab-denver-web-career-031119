export default function createStore(reducer) {
  let state
  function getState() {
    state = reducer(state, {type: 'yeet'})
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
  }
  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
