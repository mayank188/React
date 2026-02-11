import React, { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState({name:
  //   'John', age: 30
  // })

  const [nums, setnums] = useState([10,20,30,40,50]);

  function changeed(){
    const newnum = [...nums];
    newnum.push(60);
    setnums(newnum);
    
    
   
  }
  return (
    <div>
      <h1>{nums}</h1>
      <button  onClick={changeed}>Click Me</button>
    </div>
  )
}

export default App
