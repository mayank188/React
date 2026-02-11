import React from 'react'

const App = () => {
function handleWheel(event){
  console.log("Soeed is ",event.deltaY)
}
  return (
    
    <div onWheel={(elem)=>{
      handleWheel(elem)
    }}>
      {/* <div onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} className='box'></div> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
