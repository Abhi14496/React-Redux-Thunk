import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchUser, userSelector} from '../reducers/index'

const Hi = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(userSelector)

   useEffect(() => {
   dispatch(fetchUser())
   }, [dispatch])

  const renderUser = () => {


    return user.map(user =>
    <center><font Size='+2'><h2>My Friends are:<br></br>{user.buddy.firstfriendname}<br></br>{user.buddy.secondfriendname}</h2></font></center> 
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


export default Hi;