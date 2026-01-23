import React from 'react'

const Header = (props) => {

   const {setIsVisible} = props
    
    
  return (
    <div>
    <div className='header'> 
        <h1>📋 My Todo App</h1>
        <button className='btn' onClick={setIsVisible((prev)=>!prev)} >Hide Add Task Form</button>
    </div>
    </div>
  )
}

export default Header