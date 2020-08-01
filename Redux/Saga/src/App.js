import React from 'react'
import Content from './Containers/content'
import Menu from './Containers/menu'

function App(){
  return(
  <div className='grid-container'>
    <Menu/>
    <Content/> 
  </div>
       
  )
}
export default App