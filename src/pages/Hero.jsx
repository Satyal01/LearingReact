import React from 'react'

const Hero = () => {
  return (
    <div className=' border-red-500 flex flex-row  gap-4 mx-[8rem] p-[5rem] h-full '>
      <div className='  justify-center items-center'>
        <p className='uppercase text-8xl font-bold tracking-wide mb-5'>your feet deserve the best</p>
        <p className='w-72 uppercase text-xs font-semibold text-gray-500'>your feet deserve the best and we're here to help you with our shoes. your feet deserve the best and 
            we're here to help you
        </p>
        <div>
            <button className='w-28  my-4  bg-red-500 text-white outline-none text-lg '>Shop Now</button>
            <button className='w-28  ml-8 my-4 border border-black font-medium text-lg '>Category</button>
        </div>
        <div>
            <p className='text-xs text-gray-600 font-medium'>Also Available On </p>
            <div className='flex  gap-4 m-2 justify-start items-center'>
                <img className='w-4' src="./flipkart.png" alt="flipkart" />
                <img className='w-4' src="./amazon.png" alt="amazon" />
            </div>

        </div>
      </div>
        <div className='flex justify-center items-center'> 
            <img className='w-[1100px] h-[487px]' src="./shoe_image.png" alt="shoe_image" />
        </div>
    </div>
  )
}

export default Hero
