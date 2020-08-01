const initialState = {
    articles: []
    };
  
  const reducer=(state = initialState, action)=> {
    switch(action.type){
    
    case"DATA_LOADED":
    return{...state,articles:action.payload}
   default:
    return state;
  }
}
  export default reducer

