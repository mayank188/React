import React from 'react'

const App = () => {
  function btnclick() {
    alert('Button Clicked')
  }
  function mouseoverdd() {
    alert('Mouse Over')
  } 
  const pagescroll = () => {
    console.log("Page is scolrrling");
    function random(){
      console.log("Random button clicked");
    }
    
  }
  return (
    <div onWheel={(elem)=>{
      console.log(elem.deltaY)
    }}>
      {/* <button onMouseOver={mouseoverdd} onClick={btnclick} >
        Click me
      </button>
      <button onClick={function(){
        alert("Hello this is me !!!!!!!")
      }} >Dont click me !!</button> */}

      {/* <div className="box"></div>
       */}
       {/* <div className="page1"></div>
       <div className="page2"></div>
       <div className="page3"></div> */}
hello

       <button onClick={random} > Don</button>
    </div>
  )
}

export default App
