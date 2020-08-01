import React  from 'react';
import { connect } from 'react-redux'


class Hi extends React.Component {
  render(){
    
    if (this.props.loading){
      return<div><center>Loading...</center></div>
    }
    if (this.props.error){
      return<div><center>Error:Failed to Fetch</center></div>
    }
    return (
      <div>
      <center>
      <ul>  
            {this.props.userinfo.map(el => (
          <li>My friends are:<br></br>{el.buddy.firstfriendname}<br></br>{el.buddy.secondfriendname}</li>
        ))}
      </ul>
      </center>
      </div>
    );
  }
}

const mapStatetoProps=(state)=> ({
   userinfo: state.userinfo,
    loading: state.loading, 
    error: state.error
});

export default connect (mapStatetoProps)(Hi);