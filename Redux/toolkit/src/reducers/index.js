import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
   user: [],
}

// A slice for user with our three reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  
getUserSuccess: (state, { payload }) => {
  state.user = payload
},
 
  }
})

// Three actions generated from the slice
export const { getUserSuccess } = userSlice.actions

// A selector
export const userSelector = state => state.user

// The reducer
export default userSlice.reducer

// Asynchronous thunk action
export function fetchUser() {
  return async dispatch => {
  const response = await fetch('/details')
  const data = await response.json()
  dispatch(getUserSuccess(data))
  
  }
}




