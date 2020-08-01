import React  from 'react';
import { connect } from 'react-redux'


class Hi extends React.Component {
  
  
  render(){
    
  
    return (
      <div>
      <center>
      <ul>  
            {this.props.articles.map(el => (
          <li>My friends are:<br></br>{el.buddy.firstfriendname}<br></br>{el.buddy.secondfriendname}</li>
        ))}
      </ul>
      </center>
      </div>
    );
  }
}

const  mapStateToProps=(state)=>{
  return{
     articles: state.articles}
   
 };
export default connect (mapStateToProps)(Hi);