import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Products from './Products'

const Container = () => {
  return (
    <div className='bg-background-white'>
      <Header />
      <Hero />
      <Products/>
    </div>
  )
}

export default Container