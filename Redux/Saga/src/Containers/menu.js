import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
 


const getData=(url)=> dispatch=> {
    dispatch({ type: "DATA_REQUESTED",payload:{url}});
  }


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
const mapDispatchToProps = (dispatch)=>{
  return{
  getData:() => dispatch(getData())
  }
};

export default connect (mapDispatchToProps,getData)(Menu)
