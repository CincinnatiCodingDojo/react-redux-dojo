const initialState = [
  {upc:1, name:'Product 1'},
  {upc:2, name:'Product 2'},
  {upc:3, name:'Product 3'},
  {upc:4, name:'Product 4'},
  {upc:5, name:'Product 5'},
  {upc:6, name:'Product 6'}
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
