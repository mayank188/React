// import React, { useState } from 'react'
// import  axios from 'axios'

// const App = () => {
//   const [data, setdata] = useState([])
//   // async function getdata() {
//   //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   console.log(response)
//   // }
    
//   const getdata  = async ()=>{
//     // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     // const data = await response.json()
//     // console.log(data)
// //     const respone = await axios.get('https://jsonplaceholder.typicode.com/todos')
// // console.log(respone.data)
// const response = await axios.get('https://picsum.photos/v2/list')
// setdata(response.data)


//   }

//   return (
//     <div>
      

//       {/* <div>
//         {data.map(function(item, index){
//           return <img src={item.download_url} alt="Random Image" />
//         })}
//       </div> */}

//       <div className='box'>
        
//           {data.map((item) => {
//   return (
//     <img 
//       src={item.download_url} 
//       alt="Random"
//       key={item.id} 
//     />
//   )
// })}

//       </div>
//        <button onClick={getdata}>Get Data</button>
     
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)

  const getData = async () => {

    if (data.length === 0) {

      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/27205/recommendations?api_key=YOUR_API_KEY&language=en-US&page=1'
      )

      setData(response.data.results)  // IMPORTANT
    } 
    else {
      if (index < data.length - 1) {
        setIndex(index + 1)
      }
    }
  }

  return (
    <div>

      <div className='box'>
        {data.length > 0 && (
          <div>
            <h3>{data[index].title}</h3>
            <img 
              src={`https://image.tmdb.org/t/p/w500${data[index].poster_path}`}
              alt="Movie Poster"
              width="300"
            />
          </div>
        )}
      </div>

      <button onClick={getData}>
        Get Recommendation
      </button>

    </div>
  )
}

export default App
