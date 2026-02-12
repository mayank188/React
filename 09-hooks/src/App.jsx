import React, { useState } from 'react'

const App = () => {


  const [num, setnum] = useState(0)
  const inc = ()=>{
      setnum(num+1)
      setnum(num+1)
      setnum(num+1)
  }
  const dec = ()=>{
    setnum(num-1)
  }

  // const newfuntion = ()=>{
  //   alert("You click the increase button")
  // }
  const tozero =()=>{
    setnum(0)
  }
  return (
    <div>
      <div className="main">
        <h1>{num}</h1>
        <div className="button-container">
          <button onClick={inc}>Increase</button>
          <button onClick={dec}>Decrease</button>
          <button onClick={tozero} >Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App