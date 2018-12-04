
const initialState = {
    imageURL: 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000', 
    imageURLs: [] 
  }
  
  const reducer = (state = initialState, action) => {
  
    if(action.type == "INCREMENT") {
      return {
        ...state,
        // counter: state.imageURL + action.value, 
        imageURLs : state.imageURLs.concat(action.value)
      }
    }
  
    return state
  }
  
  export default reducer