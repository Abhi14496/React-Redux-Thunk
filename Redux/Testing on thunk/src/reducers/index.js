const initialState = {
  userinfo: [],
  loading:false,
 error:''
};

function reducer (state = initialState, action) {

  switch (action.type) {
      case "LOAD_USERS_LOADING":
          return { ...state, loading:true,error:'' }
      case "LOAD_USERS_SUCCESS":
          return { ...state, userinfo:action.userinfo,loading:false }
      case "LOAD_USERS_ERROR": 
            return {...state,loading: false,error: action.error}
      default:
          return state
  }

}
export default reducer
