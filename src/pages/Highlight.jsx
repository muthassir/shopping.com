import React from 'react'
import img from '../assets/img.png'

const Highlight = () => {
  return (
    <div className='px-12 py-12 relative'>
      <img src={img} alt="img" className='hidden lg:block rounded-[15px] w-full' />

      <div className='lg:absolute text-center bottom-28 lg:left-[450px] text-[#EFF5E1]'>
        <h1 className='lg:text-6xl text-2xl'>Feel Beautiful Inside and Out</h1>
        <h1 className='lg:text-6xl text-2xl'>with Every Product</h1>
        <button className="rounded-[40px] bg-[#2D3B36] text-[20px] px-2 py-2 mt-6 z-20 w-36 text-[#EFF5E1]">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Highlight
