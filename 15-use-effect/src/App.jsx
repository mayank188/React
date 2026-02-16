import React, { useEffect, useState } from 'react'


const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)
  useEffect(() => {
    console.log('use effect called')
  },[])
  return (
    <div>
      
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }} onDoubleClick={()=>{
        setnum2(num2+10)
      }} >Click</button>
      
    </div>
  )
}

export default App