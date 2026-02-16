import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {
  const [UserData, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const getdata = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`) 
    setUserData(res.data)
    
  }

  useEffect(function(){
  getdata()
  }, [index])
  

  let printuserdata = <h3 className='text-center text-gray-600 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold '>Loading...</h3>

  if (UserData.length > 0) {
    printuserdata = UserData.map(function (elem, idx) {
      return (
       <Card elem={elem} idx={idx} />
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
     

      <div className='m-5 flex flex-wrap gap-5 '>{printuserdata}</div>
       <div className='flex justify-center gap-5 mb-5' >
        
        <button
        style={{opacity:index==1?0.5:1}}
  onClick={() => {
    if (index > 1) {
      setindex(index - 1)
      setUserData([])
    }
  }}
  className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded px-7 py-3 font-semibold'
>
  Prev
</button>

<h4 className='text-white font-bold'>page {index}</h4>

<button
  
  onClick={() => {
    setindex(index + 1)
    setUserData([])
  }}
  className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded px-6 py-3 font-semibold'
>
  Next
</button>

        

      </div>
    </div>
  )
}

export default App
