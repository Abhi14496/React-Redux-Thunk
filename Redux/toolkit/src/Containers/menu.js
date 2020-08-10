import React  from 'react'
import {Link} from 'react-router-dom';



 class Menu extends React.Component {
    render() {
        return (
            <div>
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

  

 export default Menu