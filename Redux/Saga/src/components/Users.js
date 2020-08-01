import React ,{Component}from 'react';
import { connect } from 'react-redux'



 class Hello extends Component {
   

  render(){
  
  return (
      <center>
      <ul>   
            {this.props.articles.map(el => (
          <li>Name:{el.myprofile.Name}<br></br>Age:{el.myprofile.Age}<br></br>Email:{el.myprofile.Email}</li>
        ))}
      </ul>
      </center>
  );
}
}
const  mapStateToProps=(state)=>{
 return{
    articles: state.articles}
  
};

export default connect (mapStateToProps)(Hello);