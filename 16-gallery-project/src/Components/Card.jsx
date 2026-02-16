import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
        < div>
         <div className='h-39 w-44 bg-white rounded-2xl overflow-x-hidden  ' key={props.idx}>
          <img className='h-full w-full object-cover ' src={props.elem.download_url} alt="" width="200" />
        </div>
        <h2 className='font-bold  text-lg' >{props.elem.author}</h2>
       </div>
       </a>
    </div>
  )
}

export default Card