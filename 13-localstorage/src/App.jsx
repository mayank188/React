import React, { use } from 'react'

const App = () => {
  localStorage.setItem("user",'Mayank')
  localStorage.setItem("age", 20)
  
  const user = localStorage.getItem(
    "user")
  console.log(user)
  return (
    <div>
      
    </div>
  )
}

export default App