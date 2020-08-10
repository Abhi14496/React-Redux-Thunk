import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchUser, userSelector} from '../reducers/index'

const Hello = () => {
 
const { user } = useSelector(userSelector)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchUser())
    }, [dispatch])
  

  const renderUser = () => {
     return user.map(user =>
     <center><font Size='+2'><h2>Name:{user.myprofile.Name}<br></br>Age:{user.myprofile.Age}<br></br>Email:{user.myprofile.Email}</h2></font></center> 
     
     )
  }

  return (
    <section>
      <div>
        {renderUser()}
      </div>
    </section>
  )
}


export default Hello;