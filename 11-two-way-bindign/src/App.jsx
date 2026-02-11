import React, { use, useState } from 'react'

const App = () => {
  const [text, settext] = useState(second)
  const SubmitHandler=(e)=>{
e.preventDefault();
console.log('Form Submited');

    }
  return (
    
    <div>
    <form onSubmit={(e)=>{
      SubmitHandler(e);
    }} action="">
      <input className='n' type="text" placeholder='Enter your name' />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App
