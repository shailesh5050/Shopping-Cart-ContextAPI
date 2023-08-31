import React from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import Filters from './Components/Filters'

const Home = () => {
 
  return (
    <div>
      <Header />
      <div className="bg-red">
      <Filters />
      <Products />
      </div>
    </div>
  )
}

export default Home
