import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-10'>
      <div className='flex flex-col justify-center items-center w-11/12 lg:w-7/12 h-64 shadow-md bg-white'>
        <img src='https://neal.fun/spend/billgates.jpg' alt='bill gates' className='w-32 h-32 rounded-full'/>
        <h2 className='text-4xl font-bold mt-8'>Spend Bill Gates' Money</h2>
      </div>
    </div>
  )
}

export default Hero