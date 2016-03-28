const initialState = []


export default (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      console.log("something");
      return [...state, action.product];
    default:
      return state;
  }
}
