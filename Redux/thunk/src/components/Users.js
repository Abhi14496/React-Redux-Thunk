import React from 'react';
import { connect } from 'react-redux'


class Hello extends React.Component {
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
          <li>Name:{el.myprofile.Name}<br></br>Age:{el.myprofile.Age}<br></br>Email:{el.myprofile.Email}</li>
        ))}
      </ul>
      </center>
      </div>
  );
}
}

const mapStatetoProps=state=> ({
  userinfo: state.userinfo,
  loading: state.loading, 
  error: state.error
});

export default connect (mapStatetoProps)(Hello);