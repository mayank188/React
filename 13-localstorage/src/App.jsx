import React, { use } from 'react'

const App = () => {
  
 const user = {
  name:"Mayank",
  Age:25,
  roll_no:202401100500102
 }
 console.log(user)
 localStorage.setItem('user',JSON.stringify(user))
 const userr = JSON.parse(localStorage.getItem(user))
 console.log(userr)
  

  
  
  return (
    <div>
      <h1 className="text-2xl font-bold">This is a LocalStorage Example</h1>
    </div>
  )
}

export default App