import React from 'react'
import Card from './component/card'
import Navbar from './component/navbar'
import Button from './component/button'
import Back from './component/backgroundbutton'
import Image from './component/image'





const App = () => {
  return (
    <div>
   <Navbar/>
   <Navbar/>
   <Navbar/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Button/>
      <Button/>
      <Button/>
      <Button/>
     <Back/>
     <Image/>
     <Image/>    
    </div>
  )
}

export default App
