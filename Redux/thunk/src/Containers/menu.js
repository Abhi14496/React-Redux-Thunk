import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


 const LOAD_USERS_LOADING = 'LOAD_USERS_LOADING';
 const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
 const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';
 
 const users = () => 
     dispatch => {
       dispatch({type:LOAD_USERS_LOADING});
            return fetch('/details')
              .then(response => response.json())
              .then(
                userinfo =>dispatch({ type: LOAD_USERS_SUCCESS, userinfo }),
                error => dispatch({ type: LOAD_USERS_ERROR ,error }))
              };
        
              
   

 class Menu extends Component {
    render() {
        return (
            <div >
              <div>
              <center><label>Menu</label></center>
              <ul>
              <li> <Link to ="/">Userinfo</Link> </li>
              <li><Link to ="/Hi">Friends</Link></li>
              </ul>
            </div>
            </div>

        )
        }
    }

  
    const mapDispatchtoProps = (dispatch) => {
        return {
           users: () => dispatch(users()) 
        }
      }
  
 export default connect(mapDispatchtoProps,users) (Menu)