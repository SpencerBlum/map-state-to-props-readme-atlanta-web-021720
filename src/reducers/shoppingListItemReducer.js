export default function shoppingListItemReducer(state = {
  orangePeel: []
}, action) {
  console.log(action);
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log("Current state.items length %s", state.orangePeel.length);
      console.log("Updating state.items length to %s", state.orangePeel.length + 1);
      return Object.assign({}, state, { orangePeel: state.orangePeel.concat(state.orangePeel.length + 1) });

    default:
      console.log("Initial state.items length: %s", state.orangePeel.length);
      return state;
  }
};