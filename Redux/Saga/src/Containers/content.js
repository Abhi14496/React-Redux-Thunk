import React,{Component} from 'react'
import {Route} from 'react-router-dom';
import Hello from'../components/Users'
import Hi from '../components/Friends';


class Content extends Component {
    render() {
    return (
          <div className='item2'>
          <center><label>Contents</label></center>
          <Route path="/" exact component={Hello}/> 
          <Route path="/Hi"  component={Hi}/>
        </div>
    
        );
    }
  }
 
export default Content
