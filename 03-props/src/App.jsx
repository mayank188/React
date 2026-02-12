import React from 'react'
import Card from './component/card'

const App = () => {
  return (
    <div className='parent'>
     <Card user = 'Batman' age = {18} img= 'https://cdn.esquireindia.co.in/article/2025-08-11T14%3A35%3A30.664Z-batman2LEAD%20%281%29.jpg' />
     <Card user = 'joker' age = {56} img='https://rukminim2.flixcart.com/image/480/480/l22724w0/poster/f/k/2/small-poster-dark-knight-jocker-wall-poster-300-gsm-matte-paper-original-imagdhgf2maqpqsy.jpeg?q=90' />
     <Card user = 'spideman' age = {36} img='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/capsule_616x353.jpg?t=1763569499' />
     <Card user='me'/>
     <Card user = 'john wick' age = {56} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7JTf4MMvcS8bsdBoO58D0NN842xCQ45Oig&s' />
     <Card user = 'iron man' age = {45} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7JTf4MMvcS8bsdBoO58D0NN842xCQ45Oig&s' />
     
     
    </div>
  )
}

export default App
