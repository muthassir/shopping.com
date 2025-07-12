import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import plum from '../assets/plum.jpg'
import heroImg from '../assets/hero.png'

const Hero = () => {
  const glowRef = useRef(null)
  const plumRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      glowRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    )

    gsap.fromTo(
      plumRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.4 }
    )
  }, [])

  return (
    <div className='flex flex-col h-full bg-[#EFF5E1] overflow-hidden'>
      {/* one */}
      <div className='flex md:flex-row flex-col justify-between gap-6 items-center px-20 pt-10'>
        <div className='overflow-hidden'>
          <p className='lg:text-right lg:mt-0 mt-9'>Transform your skincare</p>
          <p>routine with premium products that</p>
          <p>restore, protect, and enhance your</p>
          <p>natural glow every day</p>
        </div>

        <h1
          ref={glowRef}
          className='lg:text-5xl text-3xl font-extrabold lg:w-16 lg:mr-64 lg:relative absolute lg:top-0 top-24 text-center w-screen'
        >
          GLOW NATUR-ALLY
        </h1>

        <img
          ref={plumRef}
          src={plum}
          alt="plum"
          className='rounded-xl lg:h-40 h-full lg:mr-0 lg:w-auto w-screen'
        />
      </div>

      {/* second */}
      <div className='flex lg:flex-row flex-col px-8 items-center justify-between lg:w-[900px] h-full py-2 lg:mt-6 md:mt-40 relative'>
        <button className="md:order-2 lg:order-1 rounded-[40px] bg-[#2D3B36] text-[20px] px-2 py-2 lg:ml-10 mb-44 z-20 w-36 text-[#EFF5E1] hover:bg-[#3e5147] hover:scale-105 transition-all duration-300">
          Shop Now
        </button>

        <div className='z-20 md:order-1 lg:order-1 relative'>
  <img
    ref={heroRef}
    src={heroImg}
    alt="hero-img"
    className='h-96 rounded z-20 w-full object-cover'
  />

  {/* Centered info box on bottom of image */}
  <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-[40px] bg-[#EFF5E1] h-16 flex justify-center items-center gap-4 px-4 w-72 shadow-md'>
    <img
      src={plum}
      alt="img-plum"
      className='h-10 w-10 rounded-full border-dotted border-black border-2 object-cover'
    />
    <p className='text-[12px] text-wrap text-center'>
      While giving you an invigorating cleansing experience.
    </p>
  </div>
</div>

        <h1 className='absolute top-16 left-0 text-[80px] md:text-[200px] lg:text-[300px] font-bold z-0 w-full text-center text-[#2d3b36]'>
          SKINCARE
        </h1>
      </div>
      {/* second-end */}
    </div>
  )
}

export default Hero
